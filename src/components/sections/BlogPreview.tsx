import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { api } from '@lib/api';
import { SectionHeader } from '@components/common/SectionHeader';
import TechnologyBadges from '@components/common/TechnologyBadges';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  readTime?: number;
}

interface BlogResponse {
  data: {
    data: BlogPost[];
  };
}

export const BlogPreview = () => {
  const { t, i18n } = useTranslation();
  const { data, isLoading } = useQuery<BlogResponse>({
    queryKey: ['blog', 'preview'],
    queryFn: async () => {
      const response = await api.get('/blog', { params: { limit: 4 } });
      return response.data;
    }
  });

  const posts = data?.data.data ?? [];
  const hero = posts[0];
  const rest = useMemo(() => posts.slice(1), [posts]);

  return (
    <section className="section-shell py-16">
      <SectionHeader
        eyebrow={t('blogSection.eyebrow')}
        title={t('blogSection.title')}
        description={t('blogSection.description')}
        cta={{ label: t('blogSection.cta'), to: '/blog' }}
      />

      <div className="rounded-[48px] border border-white/5 bg-gradient-to-br from-background/90 via-background/55 to-secondary/15 p-6 lg:p-12">
        {isLoading ? (
          <p className="text-foreground/60">{t('common.states.loading')}</p>
        ) : hero ? (
          <div className="grid gap-6 lg:grid-cols-12">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-[32px] border border-foreground/10 bg-background/60 p-6 lg:col-span-7"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-foreground/50">
                <span>{new Date(hero.publishedAt).toLocaleDateString(i18n.language, { month: 'short', day: 'numeric' })}</span>
                <span>{t('blogPage.stats.readTime')}: {hero.readTime ?? 5}m</span>
              </div>
              <h3 className="mt-3 text-3xl font-semibold text-foreground">{hero.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 line-clamp-4">{hero.excerpt}</p>
              <TechnologyBadges items={hero.tags} className="mt-4" />
              <Link
                to={`/blog?post=${hero.id}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-accent transition hover:border-accent/70"
              >
                {t('blogPage.readCta')}
              </Link>
            </motion.article>

            <div className="space-y-4 lg:col-span-5">
              {rest.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-foreground/10 bg-background/40 p-4"
                >
                  <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.35em] text-foreground/50">
                    <span>{new Date(post.publishedAt).toLocaleDateString(i18n.language, { month: 'short', day: 'numeric' })}</span>
                    <span>{(post.readTime ?? 5)}m</span>
                  </div>
                  <h4 className="truncate text-lg font-semibold text-foreground">{post.title}</h4>
                  <p className="text-sm text-foreground/60 line-clamp-2">{post.excerpt}</p>
                  <TechnologyBadges items={post.tags.slice(0, 3)} condensed className="mt-2" />
                </motion.article>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-foreground/60">{t('common.states.empty')}</p>
        )}
      </div>
    </section>
  );
};
