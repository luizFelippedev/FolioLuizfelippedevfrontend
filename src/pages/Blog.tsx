import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import {
  FiArrowUpRight,
  FiBookmark,
  FiClock,
  FiFilter,
  FiSearch,
  FiTag,
  FiLayers,
  FiEye,
  FiHeart
} from 'react-icons/fi';

import { api } from '@lib/api';
import { useDebouncedValue } from '@hooks/useDebouncedValue';
import { normalizeAssetUrl } from '@lib/media';
import TechnologyBadges from '@components/common/TechnologyBadges';
import { useLiveMetrics } from '@hooks/useLiveMetrics';

interface BlogPost {
  id: string;
  slug?: string;
  title: string;
  excerpt: string;
  tags: string[];
  categories?: string[];
  publishedAt?: string;
  coverImage?: { url: string };
  gallery?: Array<{ url: string; caption?: string }>;
  readTime?: number;
  views?: number;
  likes?: number;
}

interface BlogResponse {
  data: {
    data: BlogPost[];
  };
}

const PAGE_SIZE = 6;

export const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const [tag, setTag] = useState<'all' | string>('all');
  const [category, setCategory] = useState<'all' | string>('all');
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search, 400);
  const [page, setPage] = useState(1);
  const [tagPool, setTagPool] = useState<Set<string>>(new Set());
  const [categoryPool, setCategoryPool] = useState<Set<string>>(new Set());
  const { postMetrics } = useLiveMetrics();

  const { data, isLoading, isFetching, isError } = useQuery<BlogResponse>({
    queryKey: ['blog', page, tag, category, debouncedSearch],
    queryFn: async () => {
      const response = await api.get('/blog', {
        params: {
          limit: PAGE_SIZE,
          page: debouncedSearch ? 1 : page,
          tag: tag !== 'all' ? tag : undefined,
          category: category !== 'all' ? category : undefined
        }
      });
      return response.data;
    },
    placeholderData: (previousData) => previousData
  });

  useEffect(() => {
    if (data?.data.data) {
      setTagPool((prev) => {
        const next = new Set(prev);
        data.data.data.forEach((post) => post.tags.forEach((tagName) => next.add(tagName)));
        return next;
      });
      setCategoryPool((prev) => {
        const next = new Set(prev);
        data.data.data.forEach((post) => post.categories?.forEach((categoryName) => next.add(categoryName)));
        return next;
      });
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  const tags = useMemo(() => ['all', ...Array.from(tagPool.values())], [tagPool]);
  const categories = useMemo(() => ['all', ...Array.from(categoryPool.values())], [categoryPool]);
  const posts = useMemo(() => {
    const raw = (data?.data.data ?? []) as BlogPost[];
    return raw.map((post) => ({
      ...post,
      coverImage: post.coverImage?.url
        ? { ...post.coverImage, url: normalizeAssetUrl(post.coverImage.url) ?? post.coverImage.url }
        : post.coverImage
    }));
  }, [data]);
  const filteredPosts = useMemo<BlogPost[]>(() => {
    return posts.filter((post) => {
      const matchesSearch = debouncedSearch
        ? [post.title, post.excerpt, post.tags.join(' '), (post.categories ?? []).join(' ')].some((field) =>
            field.toLowerCase().includes(debouncedSearch.toLowerCase())
          )
        : true;
      const matchesCategory = category === 'all' ? true : (post.categories ?? []).includes(category);
      return matchesSearch && matchesCategory;
    });
  }, [posts, debouncedSearch, category]);

  const postsSummary = useMemo(() => {
    if (posts.length === 0) {
      return { total: 0, avgRead: 0, topTag: '-' };
    }
    const totalRead = posts.reduce((acc, post) => acc + (post.readTime ?? 5), 0);
    const tagFrequency = posts.reduce<Record<string, number>>((acc, post) => {
      post.tags.forEach((tagName) => {
        acc[tagName] = (acc[tagName] ?? 0) + 1;
      });
      return acc;
    }, {});
    const topTag = Object.entries(tagFrequency).sort((a, b) => b[1] - a[1])[0]?.[0] ?? '-';
    return {
      total: posts.length,
      avgRead: Math.round(totalRead / posts.length),
      topTag
    };
  }, [posts]);

  return (
    <main className="relative overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(0,232,255,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(204,95,255,0.16),transparent_35%)]" />
      <div className="section-shell relative space-y-10">
        <div className="relative overflow-hidden rounded-[32px] border border-foreground/10 bg-gradient-to-r from-background via-background/70 to-background/40 p-8 shadow-[0_32px_100px_rgba(0,0,0,0.46)]">
          <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_12%_10%,rgba(93,102,255,0.3),transparent_35%),radial-gradient(circle_at_88%_0%,rgba(0,232,255,0.22),transparent_30%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-3">
              <p className="inline-flex rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.45em] text-foreground/60">
                {t('blogPage.eyebrow')}
              </p>
              <h1 className="text-4xl font-display text-foreground md:text-5xl">{t('blogPage.title')}</h1>
              <p className="max-w-3xl text-sm text-foreground/70">
                {t('blogPage.subtitle', 'Field notes, release diaries, research logs')}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-foreground/70">
                <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1">Insights visuais</span>
                <span className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1">DevRel</span>
                <span className="rounded-full border border-success/20 bg-success/5 px-3 py-1">Release diaries</span>
              </div>
            </div>

            <div className="glass-panel relative space-y-3 rounded-3xl border border-foreground/10 bg-background/70 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="relative w-full md:w-auto md:flex-1">
                  <FiSearch className="absolute left-3 top-3.5 text-foreground/40" />
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder={t('blogPage.searchPlaceholder')}
                    className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 px-10 py-3 text-sm text-foreground placeholder:text-foreground/40"
                  />
                </div>
                <div className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.3em] text-foreground/60">
                  <FiFilter /> {t('common.menu')}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map((tagName) => (
                  <button
                    key={tagName}
                    onClick={() => {
                      setTag(tagName);
                      setPage(1);
                    }}
                    className={clsx(
                      'inline-flex items-center gap-1 rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.3em] transition',
                      tag === tagName
                        ? 'border-accent/60 bg-accent/10 text-accent'
                        : 'border-foreground/15 text-foreground/70 hover:border-accent/30 hover:text-accent'
                    )}
                  >
                    <FiTag /> {tagName === 'all' ? t('blogPage.filterAll') : `#${tagName}`}
                  </button>
                ))}
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
                      'inline-flex items-center gap-1 rounded-full border px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] transition',
                      category === categoryName
                        ? 'border-secondary/60 bg-secondary/10 text-secondary'
                        : 'border-foreground/15 text-foreground/70 hover:border-secondary/30 hover:text-secondary'
                    )}
                  >
                    <FiLayers /> {categoryName === 'all' ? t('blogPage.filterAll') : categoryName}
                  </button>
                ))}
              </div>

              <div className="grid gap-4 rounded-[24px] border border-foreground/10 bg-foreground/5 p-4 text-xs uppercase tracking-[0.35em] text-foreground/60 sm:grid-cols-3">
                <StatTile label={t('blogPage.stats.total')} value={postsSummary.total.toString()} />
                <StatTile label={t('blogPage.stats.readTime')} value={`${postsSummary.avgRead} min`} />
                <StatTile label={t('blogPage.stats.topTag')} value={`#${postsSummary.topTag}`} />
              </div>
            </div>
          </div>
        </div>

        <FeaturedPostHero post={filteredPosts[0]} locale={i18n.language} ctaLabel={t('blogPage.readCta')} liveMetrics={postMetrics} />

        {isLoading ? <p className="text-foreground/60">{t('common.states.loading')}</p> : null}
        {isError && !isLoading ? <p className="text-red-400">{t('blogPage.loadError')}</p> : null}

        <div className="grid gap-6 lg:grid-cols-2">
          {filteredPosts.slice(1).map((post: BlogPost) => (
            <BlogInsightCard key={post.id} post={post} locale={i18n.language} ctaLabel={t('blogPage.readCta')} liveMetrics={postMetrics} />
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
              disabled={posts.length < PAGE_SIZE || isFetching}
              className="rounded-full border border-foreground/15 px-4 py-1.5 text-[0.68rem] uppercase tracking-[0.28em] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t('common.pagination.next')}
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

const FeaturedPostHero = ({
  post,
  locale,
  ctaLabel,
  liveMetrics
}: {
  post?: BlogPost;
  locale: string;
  ctaLabel: string;
  liveMetrics: Record<string, { stars?: number; views?: number; likes?: number }>;
}) => {
  if (!post) return null;

  return (
    <section className="mb-12 grid gap-8 overflow-hidden rounded-[36px] border border-foreground/10 bg-gradient-to-r from-background/70 via-background/50 to-background/30 p-6 shadow-[0_32px_100px_rgba(0,0,0,0.42)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-1 text-xs uppercase tracking-[0.4em] text-foreground/60">
          <FiBookmark /> Featured
        </span>
        <h2 className="text-3xl font-semibold text-foreground">{post.title}</h2>
        <p className="text-sm text-foreground/70">{post.excerpt}</p>
        <TechnologyBadges items={post.tags} />
        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-foreground/60">
          <span>
            {new Date(post.publishedAt ?? Date.now()).toLocaleDateString(locale, {
              month: 'short',
              year: 'numeric'
            })}
          </span>
          <span className="inline-flex items-center gap-1">
            <FiClock /> {post.readTime ?? 5} min
          </span>
          <span className="inline-flex items-center gap-1">
            <FiEye /> {liveMetrics[post.slug ?? '']?.views ?? post.views ?? '—'}
          </span>
          <span className="inline-flex items-center gap-1">
            <FiHeart /> {liveMetrics[post.slug ?? '']?.likes ?? post.likes ?? '—'}
          </span>
        </div>
        <a
          href={post.slug ? `/blog/${post.slug}` : '#'}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/40 hover:text-accent"
        >
        {ctaLabel} <FiArrowUpRight />
        </a>
      </div>
      <div className="relative overflow-hidden rounded-[28px] border border-foreground/10 bg-background/40">
        {post.coverImage?.url ? (
          <img src={post.coverImage.url} alt={post.title} className="h-72 w-full object-cover" loading="lazy" />
        ) : (
          <div className="flex h-72 items-center justify-center text-foreground/50">
            <FiBookmark size={42} />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
    </section>
  );
};

const StatTile = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-foreground/50">{label}</p>
    <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
  </div>
);

const BlogInsightCard = ({
  post,
  locale,
  ctaLabel,
  liveMetrics
}: {
  post: BlogPost;
  locale: string;
  ctaLabel: string;
  liveMetrics: Record<string, { stars?: number; views?: number; likes?: number }>;
}) => (
  <article className="group grid gap-4 rounded-[32px] border border-foreground/10 bg-foreground/[0.02] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.32)] transition duration-300 hover:border-accent/30 hover:bg-foreground/[0.04]">
    <div className="relative overflow-hidden rounded-[24px] border border-foreground/10 bg-background/30">
      {post.coverImage?.url ? (
        <img
          src={post.coverImage.url}
          alt={post.title}
          className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-48 items-center justify-center text-foreground/40">
          <FiBookmark size={32} />
        </div>
      )}
    </div>
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.4em] text-foreground/50">
        <span>{new Date(post.publishedAt ?? Date.now()).toLocaleDateString(locale)}</span>
        <span className="inline-flex items-center gap-1 text-foreground/60">
          <FiClock /> {post.readTime ?? 5}m
        </span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-foreground">{post.title}</h3>
        <p className="text-sm text-foreground/70">{post.excerpt}</p>
      </div>
      <TechnologyBadges items={post.tags} condensed />
      <div className="flex gap-4 text-[0.7rem] uppercase tracking-[0.25em] text-foreground/60">
        <span className="inline-flex items-center gap-1">
          <FiEye /> {liveMetrics[post.slug ?? '']?.views ?? post.views ?? '—'}
        </span>
        <span className="inline-flex items-center gap-1">
          <FiHeart /> {liveMetrics[post.slug ?? '']?.likes ?? post.likes ?? '—'}
        </span>
      </div>
      <a
        href={post.slug ? `/blog/${post.slug}` : '#'}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/70 transition hover:text-accent"
      >
        {ctaLabel} <FiArrowUpRight />
      </a>
    </div>
  </article>
);
