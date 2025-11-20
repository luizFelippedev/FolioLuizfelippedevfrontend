import { useEffect, useMemo, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import { isAxiosError } from 'axios';
import { useTranslation } from 'react-i18next';

import { api } from '@lib/api';
import { normalizeAssetUrl } from '@lib/media';
import { AdminMediaUploader, type MediaItem } from '@components/admin/AdminMediaUploader';

type FieldType = 'text' | 'textarea' | 'tags' | 'checkbox' | 'select' | 'date' | 'url' | 'number';

interface FieldDefinition {
  name: string;
  labelKey: string;
  placeholderKey?: string;
  helperKey?: string;
  type: FieldType;
  required?: boolean;
  options?: Array<{ labelKey: string; value: string }>;
  defaultValue?: string | boolean;
}

interface ResourceItem {
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  badge?: string;
  meta?: string;
  featured?: boolean;
  thumbnail?: string;
  metrics?: {
    stars?: number;
    views?: number;
    likes?: number;
  };
}

interface MediaConfig {
  folder: string;
  maxFiles: number;
  coverField?: string;
  galleryField?: string;
}

interface BuildPayloadHelpers {
  media: MediaItem[];
  cover?: MediaItem | null;
}

interface ResourceConfig {
  key: 'projects' | 'blog' | 'certificates' | 'labs';
  label: string;
  description: string;
  endpoint: string;
  listEndpoint?: string;
  queryKey: string[];
  listParams?: Record<string, unknown>;
  featureKey?: string;
  fields: FieldDefinition[];
  media?: MediaConfig;
  buildPayload: (form: Record<string, string | boolean>, helpers?: BuildPayloadHelpers) => Record<string, unknown>;
  extractItems: (response: unknown, locale: string) => ResourceItem[];
}

interface MutationArgs {
  endpoint: string;
  payload?: Record<string, unknown>;
}

const toSlug = (value?: string) =>
  value
    ?.trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') ?? '';

const DATE_FORMAT: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  month: 'short',
  year: 'numeric'
};

const parseCsvValues = (value?: string | boolean) =>
  typeof value === 'string' && value.trim().length > 0
    ? value.split(',').map((token) => token.trim()).filter(Boolean)
    : [];

const normalizeUrl = (value?: string | boolean) => {
  if (typeof value !== 'string') {
    return undefined;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }
  const prefixed = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(prefixed);
    return url.toString();
  } catch {
    return prefixed;
  }
};

const parseNumberField = (value?: string | boolean) => {
  if (typeof value !== 'string') {
    return undefined;
  }
  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const createResourceConfigs = (t: (key: string, options?: Record<string, unknown>) => string): ResourceConfig[] => [
  {
    key: 'projects',
    label: t('admin.manager.tabs.projects'),
    description: t('admin.manager.descriptions.projects'),
    endpoint: '/projects',
    queryKey: ['admin', 'collection', 'projects'],
    listParams: { limit: 12 },
    featureKey: 'featured',
    media: {
      folder: 'projects',
      maxFiles: 20,
      coverField: 'heroImage',
      galleryField: 'gallery'
    },
    fields: [
      { name: 'title', labelKey: 'admin.manager.fields.title', placeholderKey: 'admin.manager.placeholders.projectTitle', type: 'text', required: true },
      { name: 'slug', labelKey: 'admin.manager.fields.slug', placeholderKey: 'admin.manager.placeholders.slug', type: 'text', required: true },
      { name: 'description', labelKey: 'admin.manager.fields.description', placeholderKey: 'admin.manager.placeholders.projectDescription', type: 'textarea', required: true },
      { name: 'category', labelKey: 'admin.manager.fields.category', placeholderKey: 'admin.manager.placeholders.category', type: 'text', required: true },
      { name: 'liveUrl', labelKey: 'admin.manager.fields.liveUrl', placeholderKey: 'admin.manager.placeholders.liveUrl', type: 'text' },
      { name: 'repositoryUrl', labelKey: 'admin.manager.fields.repositoryUrl', placeholderKey: 'admin.manager.placeholders.repositoryUrl', type: 'text' },
      { name: 'technologies', labelKey: 'admin.manager.fields.technologies', placeholderKey: 'admin.manager.placeholders.technologies', helperKey: 'admin.manager.helpers.tags', type: 'tags' },
      { name: 'metricsStars', labelKey: 'admin.manager.fields.metricsStars', type: 'number' },
      { name: 'metricsDownloads', labelKey: 'admin.manager.fields.metricsDownloads', type: 'number' },
      { name: 'metricsViews', labelKey: 'admin.manager.fields.metricsViews', type: 'number' },
      { name: 'featured', labelKey: 'admin.manager.fields.featured', type: 'checkbox', defaultValue: false }
    ],
    buildPayload: (form) => {
      const metricsEntries = Object.entries({
        stars: parseNumberField(form.metricsStars),
        downloads: parseNumberField(form.metricsDownloads),
        views: parseNumberField(form.metricsViews)
      }).filter(([, value]) => typeof value === 'number');

      const metrics = metricsEntries.length > 0 ? Object.fromEntries(metricsEntries) : undefined;

      return {
        title: form.title,
        slug: toSlug(typeof form.slug === 'string' ? form.slug : ''),
        description: form.description,
        category: form.category,
        liveUrl: normalizeUrl(form.liveUrl),
        repositoryUrl: normalizeUrl(form.repositoryUrl),
        technologies: parseCsvValues(form.technologies),
        ...(metrics ? { metrics } : {}),
        featured: Boolean(form.featured)
      };
    },
    extractItems: (response, _locale) => {
      const payload = response as { data?: { data?: Array<Record<string, any>> } };
      const items = payload?.data?.data ?? [];
      return items.map((project) => ({
        id: project.id ?? project._id,
        slug: project.slug,
        title: project.title,
        subtitle: project.category,
        badge: project.slug,
        featured: Boolean(project.featured),
        meta: Array.isArray(project.technologies) ? project.technologies.slice(0, 3).join(' · ') : undefined,
        thumbnail: normalizeAssetUrl(project.heroImage?.url ?? project.gallery?.[0]?.url),
        metrics: project.metrics
      }));
    }
  },
  {
    key: 'blog',
    label: t('admin.manager.tabs.blog'),
    description: t('admin.manager.descriptions.blog'),
    endpoint: '/blog',
    queryKey: ['admin', 'collection', 'blog'],
    listParams: { limit: 9 },
    featureKey: 'featured',
    media: {
      folder: 'blog',
      maxFiles: 20,
      coverField: 'coverImage',
      galleryField: 'gallery'
    },
    fields: [
      { name: 'title', labelKey: 'admin.manager.fields.title', placeholderKey: 'admin.manager.placeholders.blogTitle', type: 'text', required: true },
      { name: 'slug', labelKey: 'admin.manager.fields.slug', placeholderKey: 'admin.manager.placeholders.slug', type: 'text', required: true },
      { name: 'excerpt', labelKey: 'admin.manager.fields.excerpt', placeholderKey: 'admin.manager.placeholders.excerpt', type: 'textarea', required: true },
      { name: 'content', labelKey: 'admin.manager.fields.content', placeholderKey: 'admin.manager.placeholders.content', type: 'textarea', required: true },
      { name: 'tags', labelKey: 'admin.manager.fields.tags', helperKey: 'admin.manager.helpers.tags', placeholderKey: 'admin.manager.placeholders.tags', type: 'tags' },
      { name: 'categories', labelKey: 'admin.manager.fields.categories', helperKey: 'admin.manager.helpers.tags', placeholderKey: 'admin.manager.placeholders.categories', type: 'tags' },
      { name: 'readTime', labelKey: 'admin.manager.fields.readTime', type: 'number', defaultValue: '5' },
      { name: 'published', labelKey: 'admin.manager.fields.published', type: 'checkbox', defaultValue: true },
      { name: 'featured', labelKey: 'admin.manager.fields.featured', type: 'checkbox', defaultValue: false }
    ],
    buildPayload: (form) => ({
      title: form.title,
      slug: toSlug(typeof form.slug === 'string' ? form.slug : ''),
      excerpt: form.excerpt,
      content: form.content,
      tags: parseCsvValues(form.tags),
      categories: parseCsvValues(form.categories),
      readTime: parseNumberField(form.readTime) ?? 5,
      published: Boolean(form.published),
      featured: Boolean(form.featured)
    }),
    extractItems: (response, locale) => {
      const payload = response as { data?: { data?: Array<Record<string, any>> } };
      const items = payload?.data?.data ?? [];
      return items.map((post) => ({
        id: post.id ?? post._id,
        title: post.title,
        subtitle: post.excerpt,
        badge: (post.tags ?? []).slice(0, 2).map((tag: string) => `#${tag}`).join(' '),
        featured: Boolean(post.featured),
        thumbnail: normalizeAssetUrl(post.coverImage?.url ?? post.gallery?.[0]?.url),
        meta: post.publishedAt
          ? new Intl.DateTimeFormat(locale, DATE_FORMAT).format(new Date(post.publishedAt))
          : undefined
      }));
    }
  },
  {
    key: 'certificates',
    label: t('admin.manager.tabs.certificates'),
    description: t('admin.manager.descriptions.certificates'),
    endpoint: '/certificates',
    queryKey: ['admin', 'collection', 'certificates'],
    listParams: { limit: 9 },
    featureKey: 'featured',
    media: {
      folder: 'certificates',
      maxFiles: 20,
      coverField: 'previewImage',
      galleryField: 'attachments'
    },
    fields: [
      { name: 'title', labelKey: 'admin.manager.fields.title', placeholderKey: 'admin.manager.placeholders.certificateTitle', type: 'text', required: true },
      { name: 'slug', labelKey: 'admin.manager.fields.slug', placeholderKey: 'admin.manager.placeholders.slug', type: 'text', required: true },
      { name: 'issuer', labelKey: 'admin.manager.fields.issuer', placeholderKey: 'admin.manager.placeholders.issuer', type: 'text', required: true },
      { name: 'issueDate', labelKey: 'admin.manager.fields.issueDate', type: 'date', required: true, helperKey: 'admin.manager.helpers.date' },
      { name: 'expiryDate', labelKey: 'admin.manager.fields.expiryDate', type: 'date', helperKey: 'admin.manager.helpers.date' },
      {
        name: 'level',
        labelKey: 'admin.manager.fields.level',
        type: 'select',
        options: [
          { value: 'beginner', labelKey: 'admin.manager.levels.beginner' },
          { value: 'intermediate', labelKey: 'admin.manager.levels.intermediate' },
          { value: 'advanced', labelKey: 'admin.manager.levels.advanced' }
        ],
        defaultValue: 'intermediate'
      },
      {
        name: 'category',
        labelKey: 'admin.manager.fields.category',
        type: 'select',
        options: [
          { value: 'cloud', labelKey: 'admin.manager.categories.cloud' },
          { value: 'frontend', labelKey: 'admin.manager.categories.frontend' },
          { value: 'backend', labelKey: 'admin.manager.categories.backend' },
          { value: 'design', labelKey: 'admin.manager.categories.design' },
          { value: 'data', labelKey: 'admin.manager.categories.data' },
          { value: 'devops', labelKey: 'admin.manager.categories.devops' },
          { value: 'soft-skills', labelKey: 'admin.manager.categories.softSkills' },
          { value: 'other', labelKey: 'admin.manager.categories.other' }
        ],
        defaultValue: 'cloud'
      },
      { name: 'skills', labelKey: 'admin.manager.fields.skills', helperKey: 'admin.manager.helpers.tags', placeholderKey: 'admin.manager.placeholders.skills', type: 'tags' },
      { name: 'credentialId', labelKey: 'admin.manager.fields.credentialId', placeholderKey: 'admin.manager.placeholders.credentialId', type: 'text' },
      { name: 'credentialUrl', labelKey: 'admin.manager.fields.credentialUrl', placeholderKey: 'admin.manager.placeholders.credentialUrl', type: 'url' },
      { name: 'highlights', labelKey: 'admin.manager.fields.highlights', helperKey: 'admin.manager.helpers.tags', placeholderKey: 'admin.manager.placeholders.highlights', type: 'tags' },
      { name: 'featured', labelKey: 'admin.manager.fields.featured', type: 'checkbox', defaultValue: false }
    ],
    buildPayload: (form) => ({
      title: form.title,
      slug: toSlug(typeof form.slug === 'string' ? form.slug : ''),
      issuer: form.issuer,
      issueDate: form.issueDate ? new Date(String(form.issueDate)).toISOString() : undefined,
      expiryDate: form.expiryDate ? new Date(String(form.expiryDate)).toISOString() : undefined,
      category: form.category || 'cloud',
      level: form.level || 'intermediate',
      skills: parseCsvValues(form.skills),
      highlights: parseCsvValues(form.highlights),
      credentialId: typeof form.credentialId === 'string' && form.credentialId.trim().length ? form.credentialId.trim() : undefined,
      credentialUrl: normalizeUrl(form.credentialUrl),
      featured: Boolean(form.featured)
    }),
    extractItems: (response, locale) => {
      const payload = response as { data?: { data?: Array<Record<string, any>> } };
      const items = payload?.data?.data ?? [];
      return items.map((certificate) => ({
        id: certificate.id ?? certificate._id,
        title: certificate.title,
        subtitle: certificate.issuer,
        badge: certificate.level,
        featured: Boolean(certificate.featured),
        thumbnail: normalizeAssetUrl(certificate.previewImage?.url ?? certificate.attachments?.[0]?.url),
        meta: certificate.issueDate
          ? new Intl.DateTimeFormat(locale, DATE_FORMAT).format(new Date(certificate.issueDate))
          : undefined
      }));
    }
  },
  {
    key: 'labs',
    label: t('admin.manager.tabs.labs'),
    description: t('admin.manager.descriptions.labs'),
    endpoint: '/labs',
    listEndpoint: '/labs/manage',
    queryKey: ['admin', 'collection', 'labs'],
    fields: [
      { name: 'title', labelKey: 'admin.manager.fields.title', type: 'text', required: true, placeholderKey: 'admin.manager.placeholders.projectTitle' },
      { name: 'slug', labelKey: 'admin.manager.fields.slug', type: 'text', required: true, placeholderKey: 'admin.manager.placeholders.slug' },
      { name: 'description', labelKey: 'admin.manager.fields.description', type: 'textarea', required: true, placeholderKey: 'admin.manager.placeholders.projectDescription' },
      { name: 'labStatus', labelKey: 'admin.manager.fields.labStatus', type: 'text', placeholderKey: 'admin.manager.placeholders.labStatus' },
      {
        name: 'icon',
        labelKey: 'admin.manager.fields.icon',
        type: 'select',
        options: [
          { value: 'activity', labelKey: 'admin.manager.options.icon.activity' },
          { value: 'grid', labelKey: 'admin.manager.options.icon.grid' },
          { value: 'cpu', labelKey: 'admin.manager.options.icon.cpu' },
          { value: 'signal', labelKey: 'admin.manager.options.icon.signal' },
          { value: 'stack', labelKey: 'admin.manager.options.icon.stack' },
          { value: 'zap', labelKey: 'admin.manager.options.icon.zap' }
        ]
      },
      { name: 'gradient', labelKey: 'admin.manager.fields.gradient', type: 'text', placeholderKey: 'admin.manager.placeholders.gradient' },
      { name: 'ctaUrl', labelKey: 'admin.manager.fields.ctaUrl', type: 'url', placeholderKey: 'admin.manager.placeholders.ctaUrl' },
      { name: 'active', labelKey: 'admin.manager.fields.active', type: 'checkbox', defaultValue: true },
      { name: 'beta', labelKey: 'admin.manager.fields.beta', type: 'checkbox', defaultValue: true }
    ],
    buildPayload: (form) => ({
      title: form.title,
      slug: toSlug(typeof form.slug === 'string' ? form.slug : ''),
      description: form.description,
      status: form.labStatus,
      icon: form.icon,
      gradient: typeof form.gradient === 'string' && form.gradient.trim().length ? form.gradient.trim() : undefined,
      ctaUrl: normalizeUrl(form.ctaUrl),
      active: Boolean(form.active),
      beta: Boolean(form.beta)
    }),
    extractItems: (response) => {
      const labs = (response as { data?: Array<Record<string, any>> })?.data ?? [];
      return labs.map((lab) => ({
        id: lab._id,
        title: lab.title,
        subtitle: lab.status,
        badge: lab.beta ? 'Beta' : 'Live',
        featured: Boolean(lab.active),
        meta: lab.icon
      }));
    }
  }
];

const initialFormState = (fields: FieldDefinition[]) =>
  fields.reduce<Record<string, string | boolean>>((acc, field) => {
    acc[field.name] = field.type === 'checkbox' ? Boolean(field.defaultValue) : (field.defaultValue as string) ?? '';
    return acc;
  }, {});

export const AdminResourceManager = ({
  enabled,
  initialKey
}: {
  enabled: boolean;
  initialKey?: ResourceConfig['key'];
}) => {
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  const configs = useMemo(() => createResourceConfigs(t), [t]);
  const [activeKey, setActiveKey] = useState<ResourceConfig['key']>(initialKey ?? 'projects');
  const activeConfig = configs.find((config) => config.key === activeKey) ?? configs[0];
  const [formState, setFormState] = useState<Record<string, string | boolean>>(initialFormState(activeConfig.fields));
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [coverId, setCoverId] = useState<string | null>(null);
  const [slugLocked, setSlugLocked] = useState(false);
  const [importText, setImportText] = useState('');
  const [importMode, setImportMode] = useState<'json' | 'csv'>('json');

  useEffect(() => {
    if (initialKey && initialKey !== activeKey) {
      setActiveKey(initialKey);
    }
  }, [initialKey]);

  useEffect(() => {
    setFormState(initialFormState(activeConfig.fields));
    setMediaItems([]);
    setCoverId(null);
    setSlugLocked(false);
  }, [activeKey]);

  useEffect(() => {
    if (slugLocked) {
      return;
    }
    const hasSlugField = activeConfig.fields.some((field) => field.name === 'slug');
    if (!hasSlugField) {
      return;
    }
    const titleValue = typeof formState.title === 'string' ? formState.title : '';
    const desiredSlug = toSlug(titleValue);
    setFormState((prev) => {
      const currentSlug = typeof prev.slug === 'string' ? prev.slug : '';
      if (currentSlug === desiredSlug) {
        return prev;
      }
      return { ...prev, slug: desiredSlug };
    });
  }, [activeConfig, formState.title, slugLocked]);

  const listQuery = useQuery({
    queryKey: [...activeConfig.queryKey, activeKey],
    queryFn: async () => {
      const endpoint = activeConfig.listEndpoint ?? activeConfig.endpoint;
      const response = await api.get(endpoint, { params: activeConfig.listParams });
      return activeConfig.extractItems(response.data, i18n.language);
    },
    enabled,
    refetchInterval: enabled ? 8000 : false
  });

  const createMutation = useMutation({
    mutationFn: async ({ endpoint, payload }: MutationArgs) => {
      return api.post(endpoint, payload);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: activeConfig.queryKey });
      if (activeConfig.key === 'labs') {
        void queryClient.invalidateQueries({ queryKey: ['labs', 'public'] });
      }
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async ({ endpoint }: MutationArgs) => api.delete(endpoint),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: activeConfig.queryKey });
      if (activeConfig.key === 'labs') {
        void queryClient.invalidateQueries({ queryKey: ['labs', 'public'] });
      }
    }
  });

  const updateMutation = useMutation({
    mutationFn: async ({ endpoint, payload }: MutationArgs) => api.put(endpoint, payload),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: activeConfig.queryKey });
      if (activeConfig.key === 'labs') {
        void queryClient.invalidateQueries({ queryKey: ['labs', 'public'] });
      }
    }
  });

  const handleFieldChange = (field: FieldDefinition, value: string | boolean) => {
    if (field.name === 'slug' && typeof value === 'string') {
      setSlugLocked(value.trim().length > 0);
    }
    setFormState((prev) => ({ ...prev, [field.name]: value }));
  };

  const handleMediaChange = (items: MediaItem[]) => {
    setMediaItems(items);
    if (!activeConfig.media?.coverField) {
      setCoverId(null);
      return;
    }
    if (items.length === 0) {
      setCoverId(null);
      return;
    }
    setCoverId((prev) => {
      if (prev && items.some((item) => item.id === prev)) {
        return prev;
      }
      return items[0].id;
    });
  };

  const coverMedia =
    activeConfig.media?.coverField && mediaItems.length > 0
      ? mediaItems.find((item) => item.id === (coverId ?? mediaItems[0]?.id)) ?? mediaItems[0]
      : null;

  const draftKey = `admin-draft-${activeKey}`;

  const saveDraft = () => {
    const draft = {
      formState,
      coverId,
      media: mediaItems
    };
    localStorage.setItem(draftKey, JSON.stringify(draft));
    setFeedback({ type: 'success', message: t('admin.manager.messages.draftSaved', 'Rascunho salvo') });
  };

  const loadDraft = () => {
    const raw = localStorage.getItem(draftKey);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as { formState?: Record<string, string | boolean>; coverId?: string | null; media?: MediaItem[] };
      if (parsed.formState) setFormState(parsed.formState);
      if (parsed.media) setMediaItems(parsed.media);
      setCoverId(parsed.coverId ?? null);
      setFeedback({ type: 'success', message: t('admin.manager.messages.draftLoaded', 'Rascunho carregado') });
    } catch {
      setFeedback({ type: 'error', message: t('admin.manager.messages.error', 'Erro ao processar solicitação') });
    }
  };

  const clearDraft = () => {
    localStorage.removeItem(draftKey);
    setFeedback({ type: 'success', message: t('admin.manager.messages.draftCleared', 'Rascunho limpo') });
  };

  const parseCsvRows = (csv: string) => {
    const lines = csv
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    if (lines.length < 2) return [];
    const headers = lines[0].split(',').map((h) => h.trim());
    const records: Record<string, string>[] = [];
    lines.slice(1).forEach((line) => {
      const values = line.split(',').map((v) => v.trim());
      const record: Record<string, string> = {};
      headers.forEach((key, idx) => {
        record[key] = values[idx] ?? '';
      });
      records.push(record);
    });
    return records;
  };

  const formatErrorMessage = (error: unknown) => {
    if (isAxiosError(error)) {
      const details = error.response?.data?.details as {
        fieldErrors?: Record<string, string[]>;
      };
      const messages = details?.fieldErrors ? Object.values(details.fieldErrors).flat() : [];
      if (messages.length > 0) {
        return messages.join(' • ');
      }
      if (typeof error.response?.data?.message === 'string') {
        return error.response.data.message;
      }
    }
    return t('admin.manager.messages.error');
  };

  const handleCreate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    const basePayload = activeConfig.buildPayload(formState, { media: mediaItems, cover: coverMedia });
    const payload = { ...basePayload };

    if (activeConfig.media?.coverField && coverMedia) {
      payload[activeConfig.media.coverField] = { url: coverMedia.url };
    }

    if (activeConfig.media?.galleryField && mediaItems.length > 0) {
      payload[activeConfig.media.galleryField] = mediaItems.map((item) => ({ url: item.url }));
    }
    createMutation.mutate(
      { endpoint: activeConfig.endpoint, payload },
      {
        onSuccess: () => {
          setFeedback({ type: 'success', message: t('admin.manager.messages.created') });
          setFormState(initialFormState(activeConfig.fields));
          setMediaItems([]);
          setCoverId(null);
          setSlugLocked(false);
          localStorage.removeItem(draftKey);
        },
        onError: (error) => setFeedback({ type: 'error', message: formatErrorMessage(error) })
      }
    );
  };

  const handleDelete = (item: ResourceItem) => {
    setFeedback(null);
    deleteMutation.mutate(
      { endpoint: `${activeConfig.endpoint}/${item.id}` },
      {
        onSuccess: () => setFeedback({ type: 'success', message: t('admin.manager.messages.deleted') }),
        onError: () => setFeedback({ type: 'error', message: t('admin.manager.messages.error') })
      }
    );
  };

  const handleFeatureToggle = (item: ResourceItem) => {
    if (!activeConfig.featureKey) {
      return;
    }
    setFeedback(null);
    updateMutation.mutate(
      {
        endpoint: `${activeConfig.endpoint}/${item.id}`,
        payload: { [activeConfig.featureKey]: !item.featured }
      },
      {
        onSuccess: () =>
          setFeedback({
            type: 'success',
            message: item.featured ? t('admin.manager.messages.unfeatured') : t('admin.manager.messages.featured')
          }),
        onError: () => setFeedback({ type: 'error', message: t('admin.manager.messages.error') })
      }
    );
  };

  const handleReset = () => {
    setFormState(initialFormState(activeConfig.fields));
    setMediaItems([]);
    setCoverId(null);
    setSlugLocked(false);
    setFeedback(null);
  };

  const items = listQuery.data ?? [];
  const summaryLabel = t('admin.manager.summary.total', { count: items.length });
  const refreshLabel = listQuery.isFetching ? t('admin.manager.summary.updating') : t('admin.manager.summary.refresh');

  return (
    <section className="glass-panel mt-10 rounded-[32px] border border-foreground/10 bg-foreground/[0.02] p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label={t('admin.manager.form.title', { resource: activeConfig.label })}>
          {configs.map((config) => (
            <button
              key={config.key}
              type="button"
              role="tab"
              aria-pressed={config.key === activeKey}
              onClick={() => {
                setActiveKey(config.key);
                setFeedback(null);
              }}
              className={clsx(
                'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition',
                config.key === activeKey
                  ? 'border-accent/60 bg-accent/10 text-accent'
                  : 'border-foreground/15 text-foreground/60 hover:border-accent/40 hover:text-accent'
              )}
            >
              {config.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/50">
          <span>{summaryLabel}</span>
          <button
            type="button"
            onClick={() => listQuery.refetch()}
            className="rounded-full border border-foreground/20 px-4 py-1 text-foreground/70 transition hover:border-accent/40 hover:text-accent"
          >
            {refreshLabel}
          </button>
          <button
            type="button"
            onClick={saveDraft}
            className="rounded-full border border-secondary/40 px-4 py-1 text-secondary transition hover:border-secondary/60"
          >
            {t('admin.manager.actions.saveDraft', 'Salvar rascunho')}
          </button>
          <button
            type="button"
            onClick={loadDraft}
            className="rounded-full border border-foreground/20 px-4 py-1 text-foreground/70 transition hover:border-accent/40 hover:text-accent"
          >
            {t('admin.manager.actions.loadDraft', 'Carregar rascunho')}
          </button>
          <button
            type="button"
            onClick={clearDraft}
            className="rounded-full border border-foreground/20 px-4 py-1 text-foreground/70 transition hover:border-red-300 hover:text-red-200"
          >
            {t('admin.manager.actions.clearDraft', 'Limpar')}
          </button>
          <button
            type="button"
            onClick={() => {
              setImportMode('json');
              setImportText((prev) => (prev ? '' : '{ }'));
            }}
            className="rounded-full border border-foreground/20 px-4 py-1 text-foreground/70 transition hover:border-accent/40 hover:text-accent"
          >
            {t('admin.manager.actions.import', 'Importar JSON')}
          </button>
          <button
            type="button"
            onClick={() => {
              setImportMode('csv');
              setImportText((prev) => (prev ? '' : 'title,slug,description,category\nMeu projeto,slug-exemplo,Texto,Make') );
            }}
            className="rounded-full border border-foreground/20 px-4 py-1 text-foreground/70 transition hover:border-accent/40 hover:text-accent"
          >
            {t('admin.manager.actions.import', 'Importar CSV')}
          </button>
        </div>
      </div>

      <p className="mt-4 text-sm text-foreground/60">{activeConfig.description}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          {listQuery.isLoading ? (
            <p className="text-sm text-foreground/60">{t('common.states.loading')}</p>
          ) : null}
          {!listQuery.isLoading && items.length === 0 ? (
            <p className="rounded-3xl border border-dashed border-foreground/15 px-5 py-6 text-sm text-foreground/60">
              {t('admin.manager.messages.empty')}
            </p>
          ) : null}
          {items.map((item) => (
            <div
              key={item.id}
              className={clsx(
                'rounded-3xl border px-4 py-4 text-sm transition',
                item.featured ? 'border-accent/40 bg-accent/5' : 'border-foreground/10 bg-background/20'
              )}
            >
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-2xl border border-foreground/10 bg-background/30">
                  {item.thumbnail ? (
                    <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-[0.65rem] uppercase tracking-[0.3em] text-foreground/40">
                      {t('admin.manager.status.noMedia')}
                    </span>
                  )}
                  {item.featured ? (
                    <span className="absolute left-2 top-2 rounded-full bg-accent/90 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.25em] text-black">
                      {t('admin.manager.status.featured')}
                    </span>
                  ) : null}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground/40">{item.badge}</p>
                  <h4 className="truncate text-lg font-semibold text-foreground">{item.title}</h4>
                  {item.subtitle ? <p className="text-sm text-foreground/70">{item.subtitle}</p> : null}
                  {item.meta ? <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/45">{item.meta}</p> : null}
                  {item.metrics ? (
                    <div className="mt-2 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/50">
                      {typeof item.metrics.stars === 'number' ? <span>★ {item.metrics.stars}</span> : null}
                      {typeof item.metrics.views === 'number' ? <span>👁 {item.metrics.views}</span> : null}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.3em]">
                  {activeConfig.featureKey ? (
                    <button
                      type="button"
                      onClick={() => handleFeatureToggle(item)}
                      className="rounded-full border border-foreground/20 px-4 py-2 text-foreground/70 transition hover:border-accent/40 hover:text-accent"
                    >
                      {item.featured ? t('admin.manager.actions.unfeature') : t('admin.manager.actions.feature')}
                    </button>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => handleDelete(item)}
                    className="rounded-full border border-red-400/40 px-4 py-2 text-red-300 transition hover:bg-red-500/10"
                  >
                    {t('admin.manager.actions.delete')}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const next = { ...initialFormState(activeConfig.fields) };
                      if (item.title) next.title = item.title;
                      if (item.subtitle) next.subtitle = item.subtitle;
                      setFormState(next);
                      setFeedback({ type: 'success', message: t('admin.manager.messages.draftLoaded', 'Duplicado para edição') });
                      document.getElementById('resource-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="rounded-full border border-secondary/40 px-4 py-2 text-secondary transition hover:border-secondary/60"
                  >
                    {t('admin.manager.actions.duplicate', 'Duplicar')}
                  </button>
                  <a
                    href={`/${activeKey}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-foreground/20 px-4 py-2 text-foreground/80 transition hover:border-accent/40 hover:text-accent"
                  >
                    {t('admin.manager.actions.preview', 'Ver página')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-foreground/10 bg-background/40">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/10 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">
                  {t('admin.manager.form.title', { resource: activeConfig.label })}
                </p>
                <p className="text-sm text-foreground/60">{t('admin.manager.form.helper')}</p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full border border-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/60 transition hover:border-foreground/50 hover:text-accent"
              >
                {t('admin.manager.actions.reset')}
              </button>
            </div>

            {importText ? (
              <div className="space-y-2 rounded-3xl border border-foreground/15 bg-background/40 p-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/60">
                  <p>{t('admin.manager.actions.import', importMode === 'csv' ? 'Importar CSV' : 'Importar JSON')}</p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setImportMode('json')}
                      className={clsx(
                        'rounded-full border px-3 py-1',
                        importMode === 'json' ? 'border-accent/60 text-accent' : 'border-foreground/20 text-foreground/60'
                      )}
                    >
                      JSON
                    </button>
                    <button
                      type="button"
                      onClick={() => setImportMode('csv')}
                      className={clsx(
                        'rounded-full border px-3 py-1',
                        importMode === 'csv' ? 'border-accent/60 text-accent' : 'border-foreground/20 text-foreground/60'
                      )}
                    >
                      CSV
                    </button>
                  </div>
                </div>
                <textarea
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  className="min-h-[140px] w-full rounded-2xl border border-foreground/15 bg-background/60 p-3 text-sm text-foreground"
                />
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em]">
                  <button
                    type="button"
                  onClick={() => {
                    try {
                      let nextState = initialFormState(activeConfig.fields);
                      if (importMode === 'json') {
                        const parsed = JSON.parse(importText);
                        nextState = { ...nextState, ...parsed };
                      } else {
                        const parsedRows = parseCsvRows(importText);
                        if (!parsedRows.length) throw new Error('csv');
                        nextState = { ...nextState, ...parsedRows[0] };
                        setFeedback({
                          type: 'success',
                          message: t('admin.manager.messages.draftLoaded', `Importado ${parsedRows.length} linha(s); primeira carregada no formulário`)
                        });
                        setImportText(importText);
                        setImportMode('csv');
                        setFormState(nextState);
                        document.getElementById('resource-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        return;
                      }
                      setFormState(nextState);
                      setFeedback({ type: 'success', message: t('admin.manager.messages.draftLoaded', 'Importado no formulário') });
                      document.getElementById('resource-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } catch (err) {
                      setFeedback({
                        type: 'error',
                        message: t('admin.manager.messages.error', importMode === 'csv' ? 'CSV inválido' : 'JSON inválido')
                        });
                      }
                    }}
                    className="rounded-full border border-accent/50 px-4 py-2 text-accent transition hover:border-accent/80"
                  >
                    {t('admin.manager.actions.loadDraft', 'Carregar')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setImportText('')}
                    className="rounded-full border border-foreground/20 px-4 py-2 text-foreground/70 transition hover:border-foreground/50"
                  >
                    {t('common.close')}
                  </button>
                </div>
              </div>
            ) : null}

            <form id="resource-form" onSubmit={handleCreate} className="space-y-6 px-6 py-6">
              {activeConfig.media?.coverField && coverMedia ? (
                <div className="rounded-2xl border border-foreground/10 bg-background/50 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-foreground/50">{t('admin.manager.media.coverPreview')}</p>
                  <div className="mt-3 overflow-hidden rounded-xl border border-foreground/10">
                    <img src={coverMedia.url} alt={coverMedia.filename ?? coverMedia.id} className="h-32 w-full object-cover" loading="lazy" />
                  </div>
                  <p className="mt-2 text-xs text-foreground/60">{t('admin.manager.media.coverInstruction')}</p>
                </div>
              ) : null}
              <div className="grid gap-4 md:grid-cols-2">
                {activeConfig.fields.map((field) => {
                  const value = formState[field.name];
                  if (field.type === 'checkbox') {
                    return (
                      <label
                        key={field.name}
                        className="md:col-span-2 flex items-center gap-3 rounded-2xl border border-foreground/10 px-4 py-3 text-sm text-foreground/70"
                      >
                        <input
                          type="checkbox"
                          checked={Boolean(value)}
                          onChange={(event) => handleFieldChange(field, event.target.checked)}
                          className="h-4 w-4 rounded border-foreground/30 accent-accent"
                        />
                        {t(field.labelKey)}
                      </label>
                    );
                  }

                  if (field.type === 'select') {
                    return (
                      <div key={field.name} className="space-y-2">
                        <label className="text-xs uppercase tracking-[0.3em] text-foreground/50">{t(field.labelKey)}</label>
                        <select
                          required={field.required}
                          value={String(value ?? '')}
                          onChange={(event) => handleFieldChange(field, event.target.value)}
                          className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground"
                        >
                          {field.options?.map((option) => (
                            <option key={option.value} value={option.value}>
                              {t(option.labelKey)}
                            </option>
                          ))}
                        </select>
                        {field.helperKey ? <p className="text-xs text-foreground/50">{t(field.helperKey)}</p> : null}
                      </div>
                    );
                  }

                  return (
                    <div key={field.name} className={clsx('space-y-2', field.type === 'textarea' ? 'md:col-span-2' : undefined)}>
                      <label className="text-xs uppercase tracking-[0.3em] text-foreground/50">{t(field.labelKey)}</label>
                      {field.type === 'textarea' ? (
                        <textarea
                          required={field.required}
                          value={String(value ?? '')}
                          onChange={(event) => handleFieldChange(field, event.target.value)}
                          placeholder={field.placeholderKey ? t(field.placeholderKey) : undefined}
                          className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground"
                          rows={4}
                        />
                      ) : (
                        <input
                          type={field.type === 'date' ? 'date' : field.type === 'url' ? 'url' : field.type === 'number' ? 'number' : 'text'}
                          inputMode={field.type === 'number' ? 'numeric' : undefined}
                          step={field.type === 'number' ? '1' : undefined}
                          required={field.required}
                          value={String(value ?? '')}
                          onChange={(event) => handleFieldChange(field, event.target.value)}
                          placeholder={field.placeholderKey ? t(field.placeholderKey) : undefined}
                          className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground"
                        />
                      )}
                      {field.helperKey ? <p className="text-xs text-foreground/50">{t(field.helperKey)}</p> : null}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                {feedback ? (
                  <p
                    className={clsx(
                      'text-sm',
                      feedback.type === 'success' ? 'text-emerald-300' : 'text-red-400'
                    )}
                    aria-live="polite"
                  >
                    {feedback.message}
                  </p>
                ) : (
                  <span className="text-xs uppercase tracking-[0.3em] text-foreground/40">
                    {t('admin.manager.summary.hint')}
                  </span>
                )}
                <button
                  type="submit"
                  disabled={createMutation.isPending}
                  className="w-full rounded-full border border-accent/50 px-4 py-3 text-xs uppercase tracking-[0.3em] text-accent transition hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {createMutation.isPending ? t('common.states.loading') : t('admin.manager.actions.create')}
                </button>
              </div>
            </form>
          </div>

          {activeConfig.media ? (
            <AdminMediaUploader
              folder={activeConfig.media.folder}
              value={mediaItems}
              onChange={handleMediaChange}
              maxFiles={activeConfig.media.maxFiles}
              coverId={activeConfig.media.coverField ? coverId : undefined}
              onCoverChange={activeConfig.media.coverField ? setCoverId : undefined}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};
