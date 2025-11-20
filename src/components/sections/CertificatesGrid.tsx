import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { api } from '@lib/api';
import { SectionHeader } from '@components/common/SectionHeader';
import TechnologyBadges from '@components/common/TechnologyBadges';
import { normalizeAssetUrl } from '@lib/media';
import MediaPreview, { getMediaType } from '@components/common/MediaPreview';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  level: string;
  skills: string[];
  issueDate: string;
  previewImage?: { url: string };
  credentialUrl?: string;
}

interface PaginatedCertificateResponse {
  page: number;
  limit: number;
  data: Certificate[];
}

export const CertificatesGrid = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading } = useQuery<{ data: PaginatedCertificateResponse }>({
    queryKey: ['certificates', 'grid'],
    queryFn: async () => {
      const response = await api.get('/certificates', { params: { limit: 5 } });
      return response.data;
    }
  });

  const certificates =
    data?.data.data.map((certificate) => ({
      ...certificate,
      previewImage: certificate.previewImage?.url
        ? { url: normalizeAssetUrl(certificate.previewImage.url) ?? certificate.previewImage.url }
        : undefined
    })) ?? [];

  return (
    <section className="section-shell py-16">
      <SectionHeader
        eyebrow={t('certificatesSection.eyebrow')}
        title={t('certificatesSection.title')}
        description={t('certificatesSection.description')}
        cta={{ label: t('certificatesSection.cta'), to: '/certificates' }}
      />

      <div className="rounded-[48px] border border-white/5 bg-gradient-to-br from-background/90 via-background/60 to-accent/20 p-6 lg:p-12">
        {isLoading ? (
          <p className="text-foreground/60">{t('common.states.loading')}</p>
        ) : (
          <div className="grid gap-6 lg:grid-cols-12">
            {certificates[0] ? (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="rounded-[32px] border border-foreground/10 bg-background/55 p-6 lg:col-span-7"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-foreground/50">
                  <span>{certificates[0].level}</span>
                  <span>
                    {new Date(certificates[0].issueDate).toLocaleDateString(i18n.language, {
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-foreground">{certificates[0].title}</h3>
                <p className="text-sm text-foreground/60">{certificates[0].issuer}</p>
                <TechnologyBadges items={certificates[0].skills} className="mt-4" />
                <div className="mt-6 overflow-hidden rounded-3xl border border-foreground/10">
                  <MediaPreview
                    url={certificates[0].previewImage?.url}
                    alt={certificates[0].title}
                    className="h-48 w-full"
                    autoPlay={getMediaType(certificates[0].previewImage?.url) === 'video'}
                    controls={false}
                  />
                </div>
                {certificates[0].credentialUrl ? (
                  <a
                    href={certificates[0].credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent"
                  >
                    {t('certificatesSection.verify', 'Ver credencial')}
                  </a>
                ) : null}
              </motion.article>
            ) : null}

            <div className="flex flex-col gap-4 lg:col-span-5">
              {certificates.slice(1).map((certificate, index) => (
                <motion.article
                  key={certificate.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background/40 p-4"
                >
                  <div className="hidden h-20 w-28 overflow-hidden rounded-xl border border-foreground/10 sm:block">
                    <MediaPreview
                      url={certificate.previewImage?.url}
                      alt={certificate.title}
                      className="h-full w-full"
                      autoPlay={getMediaType(certificate.previewImage?.url) === 'video'}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[0.6rem] uppercase tracking-[0.4em] text-foreground/50">{certificate.level}</p>
                    <h4 className="text-lg font-semibold text-foreground">{certificate.title}</h4>
                    <p className="text-xs text-foreground/60">{certificate.issuer}</p>
                    <TechnologyBadges items={certificate.skills.slice(0, 3)} condensed className="mt-2" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
