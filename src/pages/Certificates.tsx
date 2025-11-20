import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import {
  FiAward,
  FiExternalLink,
  FiShield,
  FiFilter,
  FiLayers,
  FiClock,
  FiGrid,
  FiZap
} from 'react-icons/fi';

import { api } from '@lib/api';
import { normalizeAssetUrl } from '@lib/media';
import TechnologyBadges from '@components/common/TechnologyBadges';
import MediaPreview, { getMediaType } from '@components/common/MediaPreview';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  level: string;
  issueDate: string;
  category?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  highlights?: string[];
  previewImage?: { url: string };
  attachments?: Array<{ url: string; label?: string }>;
  featured?: boolean;
}

const PAGE_SIZE = 6;

export const CertificatesPage = () => {
  const { t, i18n } = useTranslation();
  const [page, setPage] = useState(1);
  const [level, setLevel] = useState<'all' | string>('all');
  const [levelPool, setLevelPool] = useState<Set<string>>(new Set());
  const { data, isLoading, isFetching, isError } = useQuery<{ data: { data: Certificate[] } }>({
    queryKey: ['certificates', page, level],
    queryFn: async () => {
      const response = await api.get('/certificates', {
        params: {
          page,
          limit: PAGE_SIZE,
          level: level !== 'all' ? level : undefined
        }
      });
      return response.data;
    },
    placeholderData: (previousData) => previousData
  });

  useEffect(() => {
    if (data?.data.data) {
      setLevelPool((prev) => {
        const next = new Set(prev);
        data.data.data.forEach((cert) => next.add(cert.level));
        return next;
      });
    }
  }, [data]);

  const levels = useMemo(() => ['all', ...Array.from(levelPool.values())], [levelPool]);
  const mappedCertificates = useMemo(() => {
    const items = (data?.data.data ?? []) as Certificate[];
    return items.map((cert) => ({
      ...cert,
      previewImage: cert.previewImage?.url
        ? { ...cert.previewImage, url: normalizeAssetUrl(cert.previewImage.url) ?? cert.previewImage.url }
        : cert.previewImage,
      attachments: cert.attachments?.map((item) => ({
        ...item,
        url: normalizeAssetUrl(item.url) ?? item.url
      }))
    }));
  }, [data]);

  const heroCertificate = mappedCertificates[0];
  const certificateList = mappedCertificates.slice(1);

  return (
    <main className="relative overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(0,232,255,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(204,95,255,0.16),transparent_35%)]" />
      <div className="section-shell relative space-y-10">
        <div className="relative overflow-hidden rounded-[32px] border border-foreground/10 bg-gradient-to-r from-background via-background/70 to-background/45 p-8 shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_12%_8%,rgba(93,102,255,0.3),transparent_35%),radial-gradient(circle_at_88%_0%,rgba(0,232,255,0.22),transparent_30%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-3">
              <p className="inline-flex rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.45em] text-foreground/60">
                {t('certificatesPage.eyebrow')}
              </p>
              <h1 className="text-4xl font-display text-foreground md:text-5xl">{t('certificatesPage.title')}</h1>
              <p className="max-w-3xl text-sm text-foreground/70">
                {t('certificatesPage.subtitle', 'Specializations tracked with proof')}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-foreground/70">
                <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1">Cloud & Security</span>
                <span className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1">Backend + Front</span>
                <span className="rounded-full border border-success/20 bg-success/5 px-3 py-1">AI & Data</span>
              </div>
            </div>

            <div className="glass-panel space-y-3 rounded-3xl border border-foreground/10 bg-background/70 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="flex flex-wrap items-center gap-2 text-[0.75rem] uppercase tracking-[0.3em] text-foreground/60">
                <FiFilter /> {t('common.menu')}
              </div>
              <div className="flex flex-wrap gap-2">
                {levels.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setLevel(item);
                      setPage(1);
                    }}
                    className={clsx(
                      'inline-flex items-center gap-1 rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.3em] transition',
                      level === item
                        ? 'border-accent/60 bg-accent/10 text-accent'
                        : 'border-foreground/15 text-foreground/70 hover:border-accent/30 hover:text-accent'
                    )}
                  >
                    <FiLayers /> {item === 'all' ? t('certificatesPage.filterAll') : item}
                  </button>
                ))}
              </div>
              <div className="grid gap-3 rounded-[24px] border border-foreground/10 bg-foreground/5 p-4 text-xs uppercase tracking-[0.35em] text-foreground/60 sm:grid-cols-3">
                <Stat label="Categorias" value={levels.length.toString()} Icon={FiGrid} />
                <Stat label="Última atualização" value={`${mappedCertificates.length ? new Date(mappedCertificates[0].issueDate).getFullYear() : '--'}`} Icon={FiClock} />
                <Stat label="Destaques" value="Spotlight +" Icon={FiZap} />
              </div>
            </div>
          </div>
        </div>

        <CertificateSpotlight certificate={heroCertificate} locale={i18n.language} />

        {isLoading ? <p className="text-foreground/60">{t('common.states.loading')}</p> : null}
        {isError && !isLoading ? <p className="text-red-400">{t('certificatesPage.loadError')}</p> : null}

        <div className="grid gap-6 lg:grid-cols-2">
          {certificateList.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} locale={i18n.language} />
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-foreground/70">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1 || isFetching}
            className="rounded-full border border-foreground/15 px-5 py-2 uppercase tracking-[0.3em] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t('common.pagination.previous')}
          </button>
          <div className="text-xs uppercase tracking-[0.3em]">
            {t('common.pagination.page', { page })} {isFetching ? t('common.states.updating') : ''}
          </div>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={mappedCertificates.length < PAGE_SIZE || isFetching}
            className="rounded-full border border-foreground/15 px-5 py-2 uppercase tracking-[0.3em] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {t('common.pagination.next')}
          </button>
        </div>
      </div>
    </main>
  );
};

const Stat = ({ label, value, Icon }: { label: string; value: string; Icon: React.ElementType }) => (
  <div className="flex items-center gap-2">
    <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-foreground/10 bg-background/70 text-accent">
      <Icon />
    </span>
    <div>
      <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/55">{label}</p>
      <p className="text-lg font-semibold text-foreground">{value}</p>
    </div>
  </div>
);

const CertificateSpotlight = ({
  certificate,
  locale
}: {
  certificate?: Certificate;
  locale: string;
}) => {
  const { t } = useTranslation();
  if (!certificate) return null;

  return (
    <section className="mb-12 grid gap-8 overflow-hidden rounded-[36px] border border-foreground/10 bg-gradient-to-r from-background/80 via-background/60 to-background/40 p-6 shadow-[0_32px_100px_rgba(0,0,0,0.42)] lg:grid-cols-[1fr_0.8fr] lg:p-10">
      <div className="space-y-4 text-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-1 text-xs uppercase tracking-[0.4em] text-foreground/60">
          <FiAward /> Spotlight
        </span>
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{certificate.level}</p>
          <h2 className="mt-3 text-3xl font-semibold">{certificate.title}</h2>
          <p className="text-foreground/70">{certificate.issuer}</p>
        </div>
        <div className="grid gap-3 rounded-3xl border border-foreground/10 bg-background/40 p-4 text-xs uppercase tracking-[0.3em] sm:grid-cols-3">
          <div>
            <p className="text-foreground/50">Issued</p>
            <p className="text-lg text-foreground">
              {new Date(certificate.issueDate).toLocaleDateString(locale, { month: 'short', year: 'numeric' })}
            </p>
          </div>
          <div>
            <p className="text-foreground/50">Category</p>
            <p className="text-lg text-foreground">{certificate.category ?? '—'}</p>
          </div>
          <div>
            <p className="text-foreground/50">Credential</p>
            <p className="text-lg text-foreground">{certificate.credentialId ?? '—'}</p>
          </div>
        </div>
        <TechnologyBadges items={certificate.skills} />
        {certificate.credentialUrl ? (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70 transition hover:border-accent/40 hover:text-accent"
          >
            <FiExternalLink /> Verify credential
          </a>
        ) : null}
      </div>
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-background/50 shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
          {certificate.previewImage?.url ? (
            <MediaPreview
              url={certificate.previewImage.url}
              alt={certificate.title}
              className="h-64 w-full"
              autoPlay={getMediaType(certificate.previewImage.url) === 'video'}
              controls={getMediaType(certificate.previewImage.url) === 'video'}
            />
          ) : (
            <div className="flex h-64 items-center justify-center text-foreground/50">
              <FiShield size={42} />
            </div>
          )}
        </div>
        {certificate.highlights && certificate.highlights.length > 0 ? (
          <ul className="space-y-2 rounded-3xl border border-foreground/10 bg-background/40 p-4 text-sm text-foreground/70">
            {certificate.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}
        {certificate.attachments && certificate.attachments.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {certificate.attachments.slice(0, 2).map((attachment, index) => (
              <a
                key={`${attachment.url}-${index}`}
                href={attachment.url}
                target="_blank"
                rel="noreferrer"
                className="space-y-2 rounded-2xl border border-foreground/10 bg-background/30 p-2 transition hover:border-accent/40"
              >
                <MediaPreview
                  url={attachment.url}
                  alt={attachment.label ?? t('certificatesPage.attachment', 'Attachment')}
                  className="h-24 w-full rounded-xl"
                  autoPlay={getMediaType(attachment.url) === 'video'}
                  controls={false}
                />
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                  {attachment.label ?? t('certificatesPage.attachment', 'Attachment')}
                </p>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

const CertificateCard = ({ certificate, locale }: { certificate: Certificate; locale: string }) => {
  const { t } = useTranslation();
  return (
  <article className="group grid gap-4 rounded-[32px] border border-foreground/10 bg-foreground/[0.02] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.32)] transition duration-300 hover:border-accent/30 hover:bg-foreground/[0.04]">
    <div className="relative overflow-hidden rounded-[24px] border border-foreground/10 bg-background/30">
      {certificate.previewImage?.url ? (
        <MediaPreview
          url={certificate.previewImage.url}
          alt={certificate.title}
          className="h-48 w-full transition duration-500 group-hover:scale-105"
          autoPlay={getMediaType(certificate.previewImage.url) === 'video'}
        />
      ) : (
        <div className="flex h-48 items-center justify-center text-foreground/40">
          <FiShield size={32} />
        </div>
      )}
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.4em] text-foreground/50">
        <span>{certificate.level}</span>
        <span>{new Date(certificate.issueDate).toLocaleDateString(locale)}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-foreground">{certificate.title}</h3>
        <p className="text-sm text-foreground/70">{certificate.issuer}</p>
      </div>
      <TechnologyBadges items={certificate.skills} condensed />
      {certificate.highlights && certificate.highlights.length > 0 ? (
        <ul className="space-y-1 text-sm text-foreground/70">
          {certificate.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-foreground/50" />
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}
      {certificate.attachments && certificate.attachments.length > 0 ? (
        <div className="grid gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
          {certificate.attachments.slice(0, 2).map((attachment, index) => (
            <a
              key={`${attachment.url}-${index}`}
              href={attachment.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-3 py-1 transition hover:border-accent/40 hover:text-accent"
            >
              <FiExternalLink /> {attachment.label ?? t('certificatesPage.attachment', 'Attachment')}
            </a>
          ))}
        </div>
      ) : null}
      {certificate.credentialUrl ? (
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70 transition hover:border-accent/40 hover:text-accent"
        >
          <FiExternalLink /> {certificate.credentialId ? 'Credential' : 'Verify'}
        </a>
      ) : null}
    </div>
  </article>
  );
};
