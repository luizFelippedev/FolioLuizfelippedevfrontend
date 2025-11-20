import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiGithub, FiGlobe, FiImage, FiX } from 'react-icons/fi';

import { api } from '@lib/api';
import { normalizeAssetUrl } from '@lib/media';
import { useDebouncedValue } from '@hooks/useDebouncedValue';
import { useLiveMetrics } from '@hooks/useLiveMetrics';
import TechnologyBadges from '@components/common/TechnologyBadges';
import MediaPreview, { getMediaType } from '@components/common/MediaPreview';

interface Project {
  id: string;
  slug?: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  heroImage?: { url: string };
  gallery?: Array<{ url: string; caption?: string }>;
  liveUrl?: string;
  repositoryUrl?: string;
  metrics?: {
    stars?: number;
    downloads?: number;
    views?: number;
  };
}

interface PaginatedProjectResponse {
  page: number;
  limit: number;
  data: Project[];
}

const PAGE_SIZE = 6;

export const ProjectsPage = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<'all' | string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const debouncedSearch = useDebouncedValue(search, 400);
  const [categoryPool, setCategoryPool] = useState<Set<string>>(new Set());
  const { projectMetrics } = useLiveMetrics();
  const { data, isLoading, isFetching, isError } = useQuery<{ data: PaginatedProjectResponse }>({
    queryKey: ['projects', page, category, debouncedSearch],
    queryFn: async () => {
      const limit = debouncedSearch ? PAGE_SIZE * 5 : PAGE_SIZE;
      const currentPage = debouncedSearch ? 1 : page;
      const response = await api.get('/projects', {
        params: {
          limit,
          page: currentPage,
          category: category !== 'all' ? category : undefined,
          search: undefined
        }
      });
      return response.data;
    },
    placeholderData: (previousData) => previousData
  });

  useEffect(() => {
    if (data?.data.data) {
      setCategoryPool((prev) => {
        const next = new Set(prev);
        data.data.data.forEach((project) => next.add(project.category));
        return next;
      });
    }
  }, [data]);

  const categories = useMemo(() => ['all', ...Array.from(categoryPool.values())], [categoryPool]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const projects = useMemo<Project[]>(() => {
    const raw = (data?.data.data ?? []) as Project[];
    return raw.map((project) => ({
      ...project,
      heroImage: project.heroImage?.url
        ? { ...project.heroImage, url: normalizeAssetUrl(project.heroImage.url) ?? project.heroImage.url }
        : project.heroImage,
      gallery: project.gallery?.map((item) => ({
        ...item,
        url: normalizeAssetUrl(item.url) ?? item.url
      })),
      liveUrl: project.liveUrl ?? undefined,
      repositoryUrl: project.repositoryUrl ?? undefined
    }));
  }, [data]);
  const filteredProjects = useMemo<Project[]>(() => {
    if (!debouncedSearch) return projects;
    return projects.filter((project) =>
      [project.title, project.description, project.category, project.technologies.join(' ')].some((field) =>
        field.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
    );
  }, [projects, debouncedSearch]);

  const hasNextPage = !debouncedSearch && projects.length === PAGE_SIZE;
  const heroProject = projects[0];

  return (
    <main className="relative overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(0,232,255,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(204,95,255,0.16),transparent_35%)]" />
      <div className="section-shell relative space-y-10">
        <div className="relative overflow-hidden rounded-[32px] border border-foreground/10 bg-gradient-to-r from-background via-background/70 to-background/45 p-8 shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_12%_8%,rgba(93,102,255,0.3),transparent_35%),radial-gradient(circle_at_88%_0%,rgba(0,232,255,0.22),transparent_30%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-3">
              <p className="inline-flex rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.45em] text-foreground/60">
                {t('projectsPage.eyebrow')}
              </p>
              <h1 className="text-4xl font-display text-foreground md:text-5xl">{t('projectsPage.title')}</h1>
              <p className="max-w-3xl text-sm text-foreground/70">{t('projectsPage.heroSubtitle')}</p>
              <div className="flex flex-wrap gap-2 text-xs text-foreground/70">
                <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1">Realtime dashboards</span>
                <span className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1">APIs & DevOps</span>
                <span className="rounded-full border border-success/20 bg-success/5 px-3 py-1">UI imersiva</span>
              </div>
            </div>
            <div className="glass-panel space-y-3 rounded-3xl border border-foreground/10 bg-background/70 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('projectsPage.searchPlaceholder')}
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((categoryName) => (
                  <button
                    key={categoryName}
                    onClick={() => {
                      setCategory(categoryName);
                      setPage(1);
                    }}
                    className={clsx(
                      'inline-flex items-center gap-1 rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.3em] transition',
                      category === categoryName
                        ? 'border-accent/60 bg-accent/10 text-accent'
                        : 'border-foreground/15 text-foreground/70 hover:border-accent/30 hover:text-accent'
                    )}
                  >
                    {categoryName === 'all' ? t('projectsPage.filterAll') : categoryName}
                  </button>
                ))}
              </div>
              <div className="grid gap-3 rounded-[24px] border border-foreground/10 bg-foreground/5 p-4 text-xs uppercase tracking-[0.35em] text-foreground/60 sm:grid-cols-3">
                <span>{t('projectsPage.heroSubtitle')}</span>
                <span>+ CI/CD</span>
                <span>Observability</span>
              </div>
            </div>
          </div>
        </div>

        <ProjectSpotlight project={heroProject} liveMetrics={projectMetrics} onOpenGallery={(proj) => setSelectedProject(proj)} />

        {isLoading ? <p className="text-foreground/60">{t('common.states.loading')}</p> : null}
        {isError && !isLoading ? <p className="text-red-400">{t('projectsPage.loadError')}</p> : null}

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.id}
              project={project}
              index={index}
              liveMetrics={projectMetrics}
              onOpenGallery={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {!debouncedSearch && (
          <div className="flex items-center justify-between text-sm text-foreground/70">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1 || isFetching}
              className="rounded-full border border-foreground/15 px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t('common.pagination.previous')}
            </button>
            <div className="text-[0.68rem] uppercase tracking-[0.28em]">
              {t('common.pagination.page', { page })} {isFetching ? t('common.states.updating') : ''}
            </div>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={!hasNextPage || isFetching}
              className="rounded-full border border-foreground/15 px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t('common.pagination.next')}
            </button>
          </div>
        )}

        <ProjectGalleryModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </main>
  );
};

const formatMetric = (value?: number) => {
  if (!value) return '0';
  if (value < 1000) return value.toString();
  if (value < 1000000) return `${(value / 1000).toFixed(1)}k`;
  return `${(value / 1000000).toFixed(1)}m`;
};

const ProjectShowcaseCard = ({
  project,
  index,
  onOpenGallery,
  liveMetrics
}: {
  project: Project;
  index: number;
  onOpenGallery: (project: Project) => void;
  liveMetrics: Record<string, { stars?: number; views?: number }>;
}) => {
  const { t } = useTranslation();
  const live = project.slug ? liveMetrics[project.slug] : undefined;
  const cover = project.heroImage?.url ?? project.gallery?.[0]?.url ?? undefined;
  const stats = [
    { label: 'Stars', value: formatMetric(live?.stars ?? project.metrics?.stars) },
    { label: 'Downloads', value: formatMetric(project.metrics?.downloads) },
    { label: 'Views', value: formatMetric(live?.views ?? project.metrics?.views) }
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group grid gap-4 overflow-hidden rounded-[36px] border border-foreground/10 bg-background/40 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.5)] transition duration-300 hover:border-accent/30 hover:bg-background/60 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-accent/20 via-background to-secondary/30">
        {cover ? (
          <MediaPreview
            url={cover}
            alt={project.title}
            className="h-full min-h-[320px] w-full"
            autoPlay={getMediaType(cover) === 'video'}
          />
        ) : (
          <div className="flex h-full min-h-[320px] w-full items-center justify-center text-foreground/40">{t('projectsPage.noMedia', 'Media coming soon')}</div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground/70">
          {project.category}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-5 text-xs uppercase tracking-[0.35em] text-foreground/70">
          <span>{t('projectsPage.views', { count: project.metrics?.views ?? 0 })}</span>
          {project.gallery && project.gallery.length > 0 ? (
            <button
              type="button"
              onClick={() => onOpenGallery(project)}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-4 py-2 text-foreground transition hover:border-foreground/60"
            >
              <FiImage /> {t('projectsPage.galleryButton')}
            </button>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-[28px] border border-foreground/10 bg-foreground/[0.02] p-6 backdrop-blur">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{t('projectsPage.caseStudy')}</p>
          <h3 className="mt-2 text-3xl font-semibold text-foreground">{project.title}</h3>
          <p className="mt-3 text-sm text-foreground/80">{project.description}</p>
        </div>

        <TechnologyBadges items={project.technologies} />

        {project.gallery && project.gallery.length > 0 ? (
          <div className="flex gap-3 overflow-x-auto">
            {project.gallery.slice(0, 4).map((item, thumbIndex) => (
              <button
                key={`${item.url}-${thumbIndex}`}
                type="button"
                onClick={() => onOpenGallery(project)}
                className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-2xl border border-foreground/10"
              >
                <MediaPreview
                  url={item.url}
                  alt={`${project.title} preview ${thumbIndex + 1}`}
                  className="h-full w-full"
                  autoPlay={getMediaType(item.url) === 'video'}
                />
                <span className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent opacity-0 transition group-hover:opacity-100" />
              </button>
            ))}
          </div>
        ) : null}

        <div className="grid gap-3 rounded-2xl border border-foreground/15 bg-background/50 p-4 text-center text-xs uppercase tracking-[0.3em] sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 text-foreground/60">
              <span>{stat.label}</span>
              <strong className="text-xl tracking-normal text-foreground">{stat.value}</strong>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em]">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2 text-accent transition hover:border-accent/80"
            >
              <FiGlobe /> {t('projectsPage.liveLink', 'Live project')}
            </a>
          ) : null}
          {project.repositoryUrl ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-secondary/40 px-5 py-2 text-secondary transition hover:border-secondary/80"
            >
              <FiGithub /> {t('projectsPage.repoLink', 'Repository')}
            </a>
          ) : null}
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-foreground/80 transition hover:border-foreground/50"
          >
            <FiArrowUpRight /> {t('projectsPage.detailsLink', 'Details')}
          </button>
        </div>
      </div>
    </motion.article>
  );
};

const ProjectSpotlight = ({
  project,
  onOpenGallery,
  liveMetrics
}: {
  project?: Project;
  onOpenGallery: (project: Project) => void;
  liveMetrics: Record<string, { stars?: number; views?: number }>;
}) => {
  const { t } = useTranslation();
  if (!project) {
    return (
      <section className="mb-12 rounded-[40px] border border-foreground/10 bg-gradient-to-br from-foreground/[0.05] to-background p-8 lg:p-12">
        <p className="text-xs uppercase tracking-[0.5em] text-foreground/40">{t('projectsPage.heroSubtitle')}</p>
        <h2 className="mt-4 text-4xl font-display text-foreground sm:text-5xl">{t('projectsPage.heroTitle')}</h2>
        <p className="mt-4 text-sm text-foreground/70">{t('projectsPage.heroDescription')}</p>
      </section>
    );
  }

  const cover = project.heroImage?.url ?? project.gallery?.[0]?.url;
  const live = project.slug ? liveMetrics[project.slug] : undefined;
  const stats = [
    { label: t('projectsPage.spotlightMetrics.stars', 'Stars'), value: formatMetric(live?.stars ?? project.metrics?.stars) },
    { label: t('projectsPage.spotlightMetrics.views', 'Views'), value: formatMetric(live?.views ?? project.metrics?.views) },
    { label: t('projectsPage.spotlightMetrics.downloads', 'Deploys'), value: formatMetric(project.metrics?.downloads) }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative mb-12 overflow-hidden rounded-[44px] border border-foreground/10 bg-gradient-to-r from-background via-background/80 to-background/40 p-8 shadow-[0_40px_160px_rgba(0,0,0,0.55)] lg:p-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/20 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.5em] text-foreground/60">
            {t('projectsPage.spotlightBadge', 'Spotlight build')}
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-foreground/50">{t('projectsPage.heroSubtitle')}</p>
            <h2 className="mt-4 text-4xl font-display text-foreground sm:text-5xl">{project.title}</h2>
            <p className="mt-4 text-sm text-foreground/80">{project.description}</p>
          </div>
          <TechnologyBadges items={project.technologies} />
          <div className="grid gap-4 rounded-3xl border border-foreground/15 bg-foreground/[0.03] p-5 text-center text-xs uppercase tracking-[0.3em] sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 text-foreground/60">
                <span>{stat.label}</span>
                <strong className="text-2xl tracking-normal text-foreground">{stat.value}</strong>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em]">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2 text-accent transition hover:border-accent"
              >
                <FiGlobe /> {t('projectsPage.liveLink', 'Live project')}
              </a>
            ) : null}
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary/40 px-5 py-2 text-secondary transition hover:border-secondary"
              >
                <FiGithub /> {t('projectsPage.repoLink', 'Repository')}
              </a>
            ) : null}
            {cover ? (
              <button
                type="button"
                onClick={() => onOpenGallery(project)}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-foreground/80 transition hover:border-foreground/50"
              >
                <FiImage /> {t('projectsPage.galleryButton')}
              </button>
            ) : null}
          </div>
        </div>

        {cover ? (
          <div className="relative">
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-accent/30 via-transparent to-secondary/30 blur-3xl opacity-40" />
            <div className="relative overflow-hidden rounded-[32px] border border-foreground/10 bg-background/70 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
              <MediaPreview
                url={cover}
                alt={project.title}
                className="h-[360px] w-full"
                autoPlay={getMediaType(cover) === 'video'}
              />
              <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.4em] text-foreground/60">
                {t('projectsPage.galleryHeading', 'Gallery')}
              </div>
            </div>
            {project.gallery && project.gallery.length > 1 ? (
              <div className="mt-4 flex gap-3 overflow-x-auto">
                {project.gallery.slice(0, 4).map((item, index) => (
                  <button
                    key={`${item.url}-${index}`}
                    type="button"
                    onClick={() => onOpenGallery(project)}
                    className="h-20 w-28 flex-shrink-0 overflow-hidden rounded-2xl border border-foreground/10"
                  >
                    <MediaPreview
                      url={item.url}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="h-full w-full"
                      autoPlay={getMediaType(item.url) === 'video'}
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.section>
  );
};

const ProjectGalleryModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!project) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [project, onClose]);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  if (!project) return null;

  const images = [
    project.heroImage?.url,
    ...(project.gallery ?? []).map((item) => item.url)
  ].filter(Boolean) as string[];

  const mediaItems = images.map((url) => ({ url, type: getMediaType(url) }));

  if (mediaItems.length === 0) {
    return null;
  }

  const activeMedia = mediaItems[activeIndex];

  const goTo = (direction: 'next' | 'prev') => {
    setActiveIndex((current) => {
      if (direction === 'next') {
        return (current + 1) % mediaItems.length;
      }
      return (current - 1 + mediaItems.length) % mediaItems.length;
    });
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[32px] border border-foreground/15 bg-background shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
      >
        <div className="flex items-center justify-between border-b border-foreground/10 px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{t('projectsPage.galleryHeading')}</p>
            <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-foreground/20 p-2 text-foreground/80 transition hover:border-foreground/60"
            aria-label="Close gallery"
          >
            <FiX />
          </button>
        </div>
        <div className="max-h-[80vh] overflow-y-auto p-6">
          <div className="relative overflow-hidden rounded-[30px] border border-foreground/10">
            <MediaPreview
              url={activeMedia?.url}
              alt={`${project.title} preview`}
              className="h-[420px] w-full"
              autoPlay={activeMedia?.type === 'video'}
              controls={activeMedia?.type === 'video'}
            />
            {mediaItems.length > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Previous media"
                  onClick={() => goTo('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-foreground/20 bg-background/70 p-3 text-foreground transition hover:border-foreground/60"
                >
                  <FiChevronLeft />
                </button>
                <button
                  type="button"
                  aria-label="Next media"
                  onClick={() => goTo('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-foreground/20 bg-background/70 p-3 text-foreground transition hover:border-foreground/60"
                >
                  <FiChevronRight />
                </button>
              </>
            ) : null}
          </div>
          {mediaItems.length > 1 ? (
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {mediaItems.map((item, index) => (
                <button
                  key={`${item.url}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={clsx(
                    'h-20 w-28 flex-shrink-0 overflow-hidden rounded-2xl border transition',
                    activeIndex === index ? 'border-accent/70' : 'border-foreground/10'
                  )}
                >
                  <MediaPreview
                    url={item.url}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className="h-full w-full"
                    autoPlay={item.type === 'video'}
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
};
