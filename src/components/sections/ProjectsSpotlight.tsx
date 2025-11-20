import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { api } from '@lib/api';
import { SectionHeader } from '@components/common/SectionHeader';
import TechnologyBadges from '@components/common/TechnologyBadges';

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
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

const formatMetric = (value?: number) => {
  if (!value) return '0';
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 10_000) return `${Math.round(value / 1000)}K`;
  return value.toString();
};

export const ProjectsSpotlight = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery<{ data: PaginatedProjectResponse }>({
    queryKey: ['projects', 'spotlight'],
    queryFn: async () => {
      const response = await api.get('/projects', { params: { limit: 3, featured: true } });
      return response.data;
    }
  });

  const projects = data?.data.data ?? [];
  const [hero, ...rest] = projects;

  return (
    <section className="section-shell py-16">
      <SectionHeader
        eyebrow={t('projectsSection.eyebrow')}
        title={t('projectsSection.title')}
        description={t('projectsSection.description')}
        cta={{ label: t('projectsSection.cta'), to: '/projects' }}
      />

      <div className="rounded-[48px] border border-white/5 bg-gradient-to-br from-background/90 via-background/60 to-secondary/20 p-6 shadow-[0_40px_180px_rgba(0,0,0,0.45)] lg:p-12">
        {isLoading ? (
          <p className="text-foreground/60">{t('common.states.loading')}</p>
        ) : hero ? (
          <>
            <div className="grid gap-6 lg:grid-cols-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 rounded-[32px] border border-foreground/10 bg-background/55 p-6 backdrop-blur lg:col-span-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.35em] text-foreground/50">
                  <span>{hero.slug}</span>
                  <span className="rounded-full border border-foreground/15 px-3 py-1">{hero.category}</span>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.4em] text-foreground/50">
                    {t('projectsSection.spotlight', 'Portfolio RX')}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-foreground">{hero.title}</h3>
                  <p className="mt-3 text-sm text-foreground/70">{hero.description}</p>
                </div>
                <TechnologyBadges items={hero.technologies} />
                <div className="grid gap-3 rounded-3xl border border-foreground/10 bg-background/30 p-4 text-xs uppercase tracking-[0.35em] sm:grid-cols-3">
                  <div>
                    <p className="text-foreground/50">{t('projectsSection.metrics.stars', 'Stars')}</p>
                    <p className="text-2xl text-foreground">{formatMetric(hero.metrics?.stars)}</p>
                  </div>
                  <div>
                    <p className="text-foreground/50">{t('projectsSection.metrics.downloads', 'Deploys')}</p>
                    <p className="text-2xl text-foreground">{formatMetric(hero.metrics?.downloads)}</p>
                  </div>
                  <div>
                    <p className="text-foreground/50">{t('projectsSection.metrics.views', 'Views')}</p>
                    <p className="text-2xl text-foreground">{formatMetric(hero.metrics?.views)}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em]">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-accent transition hover:border-accent/70"
                  >
                    {t('projectsSection.cta')}
                  </Link>
                  <Link
                    to={`/projects?slug=${hero.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-foreground/80 transition hover:border-foreground/50"
                  >
                    {t('projectsSection.heroDetails', 'Case study')}
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4 rounded-[32px] border border-foreground/10 bg-background/40 p-6 lg:col-span-5"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">
                  {t('projectsSection.timeline', 'Realtime timeline')}
                </p>
                <div className="space-y-4">
                  {[hero, ...rest].slice(0, 4).map((project, index) => (
                    <Link
                      to={`/projects?highlight=${project.slug}`}
                      key={`${project.id}-${index}`}
                      className="group flex items-center justify-between rounded-2xl border border-foreground/10 bg-background/30 px-4 py-3 transition hover:border-accent/40"
                    >
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.4em] text-foreground/40">{project.category}</p>
                        <h4 className="truncate text-lg text-foreground">{project.title}</h4>
                      </div>
                      <span className="text-xs uppercase tracking-[0.3em] text-secondary opacity-0 transition group-hover:opacity-100">
                        {t('projectsSection.heroDetails', 'Case')}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {rest.length > 0 ? (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {rest.slice(0, 4).map((project, index) => (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ translateY: -6 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group rounded-[28px] border border-foreground/10 bg-background/35 p-5"
                  >
                    <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.4em] text-foreground/50">
                      <span>{project.slug}</span>
                      <span>{project.category}</span>
                    </div>
                    <h4 className="mt-3 text-2xl font-semibold">{project.title}</h4>
                    <p className="mt-2 text-sm text-foreground/70 line-clamp-3">{project.description}</p>
                    <TechnologyBadges items={project.technologies.slice(0, 4)} className="mt-4" condensed />
                    <div className="mt-4 flex items-center justify-between text-xs text-foreground/60">
                      <p>
                        ⭐ {formatMetric(project.metrics?.stars)} · 👁 {formatMetric(project.metrics?.views)}
                      </p>
                      <Link
                        to={`/projects?slug=${project.slug}`}
                        className="text-secondary opacity-0 transition group-hover:opacity-100"
                      >
                        {t('projectsSection.heroDetails', 'Case')}
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : null}
          </>
        ) : (
          <p className="text-foreground/60">{t('common.states.empty')}</p>
        )}
      </div>
    </section>
  );
};
