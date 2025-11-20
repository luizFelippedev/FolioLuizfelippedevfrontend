import { type FormEvent, useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { io, type Socket } from 'socket.io-client';
import { useTranslation } from 'react-i18next';

import { api } from '@lib/api';
import { AdminResourceManager } from '@components/admin/AdminResourceManager';
import { AdminNotificationsPanel } from '@components/admin/AdminNotificationsPanel';

interface MetricResponse {
  stats: Array<{ label: string; value: string }>;
  requestsPerMinute: number;
  activeUsers: number;
  uptime: string;
  recentActivity: Array<{ id: string; action: string; timestamp: string }>;
}

interface AdminMetricsApiResponse {
  totals?: {
    projects?: number;
    certificates?: number;
    blogPosts?: number;
    subscribers?: number;
    testimonials?: number;
    activeUsers?: number;
    pendingContacts?: number;
  };
  recentActivity?: Array<{
    _id?: string;
    id?: string;
    action?: string;
    createdAt?: string;
    timestamp?: string;
  }>;
}

interface StackStatusResponse {
  services?: Array<{
    name: string;
    status: 'online' | 'degraded' | 'offline';
    detail?: string;
  }>;
}

const buildFallbackMetrics = (t: (key: string) => string): MetricResponse => ({
  stats: [
    { label: t('admin.metrics.defaults.stats.apis'), value: '16' },
    { label: t('admin.metrics.defaults.stats.latency'), value: '120 ms' },
    { label: t('admin.metrics.defaults.stats.errors'), value: '0.4%' }
  ],
  requestsPerMinute: 480,
  activeUsers: 64,
  uptime: '99.98%',
  recentActivity: [
    { id: '1', action: t('admin.metrics.defaults.activity.deploy'), timestamp: t('admin.metrics.defaults.activity.twoHours') },
    { id: '2', action: t('admin.metrics.defaults.activity.newsletter'), timestamp: t('admin.metrics.defaults.activity.fourHours') },
    { id: '3', action: t('admin.metrics.defaults.activity.admin'), timestamp: t('admin.metrics.defaults.activity.yesterday') }
  ]
});

export const AdminDashboard = () => {
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  const fallbackMetrics = useMemo(() => buildFallbackMetrics(t), [t]);
  const [managerKey, setManagerKey] = useState<'projects' | 'blog' | 'certificates' | 'labs'>('projects');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [liveMetrics, setLiveMetrics] = useState<AdminMetricsApiResponse | null>(null);

  useEffect(() => {
    const verifySession = async () => {
      try {
        await api.get('/auth/me');
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setCheckingSession(false);
      }
    };

    void verifySession();
  }, []);

  const { data, isFetching } = useQuery<{ data: AdminMetricsApiResponse }>({
    queryKey: ['admin', 'metrics'],
    queryFn: async () => {
      const response = await api.get('/admin/metrics');
      return response.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    refetchInterval: isAuthenticated ? 10000 : false,
    enabled: isAuthenticated
  });

  useEffect(() => {
    const deriveBase = () => api.defaults.baseURL?.replace(/\/api$/, '') ?? '';
    const base = deriveBase();
    if (!base) return;
    const socket: Socket = io(`${base}/notifications`, {
      transports: ['websocket'],
      withCredentials: true
    });

    socket.on('connect', () => {
      socket.emit('notifications:subscribe', ['admin-alerts']);
    });
    socket.on('metrics:update', (payload: AdminMetricsApiResponse) => {
      setLiveMetrics(payload);
    });
    socket.on('activity', (payload: AdminMetricsApiResponse['recentActivity']) => {
      setLiveMetrics((prev) => ({ ...(prev ?? {}), recentActivity: payload }));
    });

    return () => {
      socket.emit('notifications:unsubscribe', ['admin-alerts']);
      socket.disconnect();
    };
  }, []);

  const { data: stackData, dataUpdatedAt: stackUpdatedAt } = useQuery<{ data: StackStatusResponse }>({
    queryKey: ['admin', 'stack-status'],
    queryFn: async () => {
      const response = await api.get('/status/summary');
      return response.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    refetchInterval: 15000
  });

  const resolvedMetrics = useMemo(() => {
    if (!isAuthenticated || (!data?.data && !liveMetrics)) {
      return fallbackMetrics;
    }

    const payload = liveMetrics ?? data?.data ?? {};
    const totals = payload.totals ?? {};
    const recentActivity = payload.recentActivity ?? data?.data?.recentActivity ?? [];
    const formatTimestamp = (value?: string) => {
      if (!value) return t('admin.metrics.defaults.activity.now');
      try {
        return new Intl.DateTimeFormat(i18n.language, {
          dateStyle: 'short',
          timeStyle: 'short'
        }).format(new Date(value));
      } catch {
        return value;
      }
    };

    return {
      stats: [
        { label: t('admin.metrics.labels.projects'), value: String(totals.projects ?? 0) },
        { label: t('admin.metrics.labels.certificates'), value: String(totals.certificates ?? 0) },
        { label: t('admin.metrics.labels.posts'), value: String(totals.blogPosts ?? 0) }
      ],
      requestsPerMinute:
        typeof (payload as any).requestsPerMinute === 'number'
          ? (payload as any).requestsPerMinute
          : fallbackMetrics.requestsPerMinute,
      activeUsers: totals.activeUsers ?? fallbackMetrics.activeUsers,
      uptime: (payload as any).uptime ?? fallbackMetrics.uptime,
      recentActivity:
        recentActivity.length > 0
          ? recentActivity.map((activity, index) => ({
              id: activity._id?.toString() ?? activity.id ?? `activity-${index}`,
              action: activity.action ?? t('admin.metrics.defaults.activity.generic'),
              timestamp: formatTimestamp(activity.createdAt ?? activity.timestamp)
            }))
          : fallbackMetrics.recentActivity
    };
  }, [data, isAuthenticated, fallbackMetrics, i18n.language, liveMetrics, t]);

  const loginMutation = useMutation({
    mutationFn: async () => {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    },
    onSuccess: () => {
      setMessage(t('admin.auth.messages.success'));
      setEmail('');
      setPassword('');
      setIsAuthenticated(true);
      setCheckingSession(false);
      void queryClient.invalidateQueries({ queryKey: ['admin', 'metrics'] });
    },
    onError: (error) => {
      if (error instanceof Error) {
        setMessage(t('admin.auth.messages.error', { message: error.message }));
      } else {
        setMessage(t('admin.auth.messages.genericError'));
      }
    }
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    loginMutation.mutate();
  };

  const handleRefreshMetrics = () => {
    void queryClient.invalidateQueries({ queryKey: ['admin', 'metrics'] });
  };

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
    } catch {
      // No-op
    } finally {
      setIsAuthenticated(false);
      setMessage(t('admin.auth.messages.logout'));
      setEmail('');
      setPassword('');
      queryClient.removeQueries({ queryKey: ['admin', 'metrics'] });
    }
  };

  const heroTitle = isAuthenticated ? t('admin.auth.sessionTitle') : t('admin.auth.title');
  const heroDescription = isAuthenticated
    ? t('admin.auth.sessionDescription')
    : 'Acesse com suas credenciais administrativas.';
  const techStatuses =
    stackData?.data?.services?.map((service) => ({
      label: service.name,
      value:
        service.status === 'online'
          ? 'Online'
          : service.status === 'degraded'
            ? 'Degradado'
            : 'Offline',
      tone:
        service.status === 'online'
          ? 'text-success'
          : service.status === 'degraded'
            ? 'text-secondary'
            : 'text-red-400',
      detail: service.detail ?? ''
    })) ?? [
      { label: 'APIs core', value: 'Online', tone: 'text-success', detail: 'HTTP + GraphQL' },
      { label: 'Filas/Jobs', value: 'Saudáveis', tone: 'text-secondary', detail: 'Queues e cron' },
      { label: 'Cache/Assets', value: 'Quente', tone: 'text-accent', detail: 'Redis/CDN' },
      { label: 'Labs realtime', value: 'WebSocket OK', tone: 'text-success', detail: 'admin-alerts' }
    ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-10 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_10%,rgba(0,232,255,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(204,95,255,0.16),transparent_35%)]" />
      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10">
        <motion.section
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[32px] border border-foreground/10 bg-gradient-to-br from-accent/5 via-background/50 to-secondary/10 p-6 sm:p-8 text-foreground shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
        >
          <div className="pointer-events-none absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_15%_20%,rgba(93,102,255,0.28),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(0,232,255,0.22),transparent_30%)]" />
            <div className="relative flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.35em] text-foreground/60">
              <span
                className={clsx(
                  'rounded-full border px-3 py-1',
                  isAuthenticated ? 'border-success/30 bg-success/10 text-success/90' : 'border-foreground/15 bg-foreground/5 text-foreground/70'
                )}
              >
                {isAuthenticated ? t('admin.metrics.values.synced') : t('admin.auth.actions.enter')}
              </span>
            </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-foreground/60">{t('admin.auth.eyebrow')}</p>
              <h1 className="mt-3 text-3xl font-display text-foreground sm:text-4xl">{heroTitle}</h1>
              <p className="mt-3 max-w-2xl text-sm text-foreground/70">{heroDescription}</p>
            </div>
            {isAuthenticated ? (
              <div className="flex flex-col items-stretch gap-3 text-xs uppercase tracking-[0.3em] sm:flex-row sm:items-center sm:gap-4">
                <button
                  type="button"
                  onClick={handleRefreshMetrics}
                  className="rounded-full border border-foreground/20 px-5 py-2 text-foreground transition hover:border-accent/60 hover:text-accent"
                >
                  {t('admin.auth.actions.refresh')}
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-full border border-foreground/20 px-5 py-2 text-foreground/70 transition hover:border-red-400 hover:text-red-300"
                >
                  {t('admin.auth.actions.logout')}
                </button>
              </div>
            ) : null}
          </div>
        </motion.section>

        <div className="grid gap-6 lg:gap-8 xl:grid-cols-[360px_minmax(0,1fr)] mt-4">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] border border-foreground/10 bg-background/75 p-6 sm:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="pointer-events-none absolute inset-0 blur-2xl bg-[radial-gradient(circle_at_20%_0%,rgba(0,232,255,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(204,95,255,0.18),transparent_35%)]" />
            <div className="relative">
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">
              {isAuthenticated ? t('admin.auth.sessionTitle') : t('admin.auth.title')}
            </p>
            <p className="mt-3 text-sm text-foreground/65">
              {isAuthenticated ? t('admin.auth.sessionDescription') : 'Use suas credenciais de admin para entrar.'}
            </p>
            {isAuthenticated ? (
              <div className="mt-6 space-y-4 rounded-2xl border border-foreground/10 bg-foreground/5 p-4 text-sm text-foreground shadow-inner">
                <p className="text-foreground/70">{t('admin.auth.sessionCard.description')}</p>
                <p className="text-xs text-foreground/50">
                  {t('admin.auth.description')}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleRefreshMetrics}
                    className="w-full rounded-full border border-accent/60 px-4 py-3 text-xs uppercase tracking-[0.3em] text-accent transition hover:bg-accent/10"
                  >
                    {t('admin.auth.actions.refresh')}
                  </button>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full rounded-full border border-foreground/20 px-4 py-3 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:bg-foreground/10"
                  >
                    {t('admin.auth.actions.logout')}
                  </button>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <a
                    href="/projects"
                    className="flex items-center justify-center rounded-full border border-foreground/15 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/40 hover:text-accent"
                  >
                    {t('common.footer.links.projects')}
                  </a>
                  <a
                    href="/certificates"
                    className="flex items-center justify-center rounded-full border border-foreground/15 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/40 hover:text-accent"
                  >
                    {t('common.footer.links.terms', 'Certificados')}
                  </a>
                  <a
                    href="/blog"
                    className="flex items-center justify-center rounded-full border border-foreground/15 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/40 hover:text-accent"
                  >
                    {t('common.footer.links.privacy', 'Blog')}
                  </a>
                  <a
                    href="#resources"
                    className="flex items-center justify-center rounded-full border border-foreground/15 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/40 hover:text-accent"
                  >
                    {t('admin.auth.sessionTitle')}
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  type="email"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  placeholder={t('admin.auth.placeholders.email')}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  disabled={checkingSession}
                />
                <input
                  type="password"
                  className="w-full rounded-2xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                  placeholder={t('admin.auth.placeholders.password')}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  disabled={checkingSession}
                />
                <button
                  type="submit"
                  disabled={loginMutation.isPending || checkingSession}
                  className="w-full rounded-full border border-accent/60 px-4 py-3 text-xs uppercase tracking-[0.3em] text-accent transition hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-60 shadow-[0_16px_40px_rgba(0,232,255,0.2)]"
                >
                  {loginMutation.isPending
                    ? t('admin.auth.actions.authenticating')
                    : checkingSession
                      ? t('admin.auth.actions.checking')
                      : t('admin.auth.actions.enter')}
                </button>
              </form>
            )}
            {message ? (
              <p className="mt-4 text-sm text-secondary" aria-live="polite">
                {message}
              </p>
            ) : null}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 rounded-[32px]"
          >
            <div className="flex flex-wrap items-center gap-2 text-[0.72rem] uppercase tracking-[0.3em] text-foreground/50">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-accent/90">Ao vivo</span>
              <span>{isFetching ? t('admin.metrics.values.syncing') : t('admin.metrics.values.synced')}</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {resolvedMetrics.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/50">{stat.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="glass-panel grid gap-6 rounded-[32px] border border-foreground/10 p-6 sm:grid-cols-2">
                <MetricHighlight
                  label={t('admin.metrics.labels.requestsPerMinute')}
                  value={resolvedMetrics.requestsPerMinute.toLocaleString(i18n.language)}
                  accent="text-accent"
                />
                <MetricHighlight
                  label={t('admin.metrics.labels.activeUsers')}
                  value={String(resolvedMetrics.activeUsers)}
                  accent="text-secondary"
                />
                <MetricHighlight label={t('admin.metrics.labels.uptime')} value={resolvedMetrics.uptime} accent="text-foreground" />
                <MetricHighlight
                  label={t('admin.metrics.labels.status')}
                  value={isFetching ? t('admin.metrics.values.syncing') : t('admin.metrics.values.synced')}
                  accent={isFetching ? 'text-secondary' : 'text-foreground'}
                />
              </div>

              <div className="rounded-[32px] border border-foreground/10 bg-foreground/[0.03] p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.4em] text-foreground/50">
                  <span>Stack & serviços</span>
                  <span className="rounded-full border border-foreground/15 px-3 py-1 text-[0.65rem] text-foreground/60">
                    {stackUpdatedAt ? new Date(stackUpdatedAt).toLocaleTimeString(i18n.language) : '—'}
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {techStatuses.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-foreground/10 bg-background/50 p-4 text-sm text-foreground/75"
                    >
                      <p className="text-[0.7rem] uppercase tracking-[0.3em] text-foreground/50">{item.label}</p>
                      <p className={clsx('mt-2 text-lg font-semibold', item.tone)}>{item.value}</p>
                      <p className="text-xs text-foreground/50">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-foreground/10 bg-foreground/[0.03] p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{t('admin.metrics.recents')}</p>
                <span className="text-[0.65rem] uppercase tracking-[0.4em] text-foreground/40">
                  {t('admin.metrics.values.status')}
                </span>
              </div>
              <div className="mt-4 space-y-3">
                {resolvedMetrics.recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex flex-col gap-1 rounded-2xl border border-foreground/10 bg-background/40 px-4 py-3 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span>{activity.action}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-foreground/40">{activity.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>

            <AdminNotificationsPanel />
          </motion.section>
        </div>

        {isAuthenticated ? (
          <div id="resources" className="rounded-[32px] border border-foreground/10 bg-background/80 p-4 sm:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <button
                type="button"
                onClick={() => {
                  setManagerKey('projects');
                  document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="rounded-full border border-accent/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent transition hover:border-accent/70"
              >
                + Projeto
              </button>
              <button
                type="button"
                onClick={() => {
                  setManagerKey('certificates');
                  document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="rounded-full border border-secondary/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary transition hover:border-secondary/70"
              >
                + Certificado
              </button>
              <button
                type="button"
                onClick={() => {
                  setManagerKey('blog');
                  document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="rounded-full border border-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/50 hover:text-accent"
              >
                + Blog
              </button>
              <button
                type="button"
                onClick={() => {
                  setManagerKey('labs');
                  document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="rounded-full border border-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/50 hover:text-accent"
              >
                + Lab
              </button>
            </div>
            <AdminResourceManager enabled={isAuthenticated} initialKey={managerKey} />
          </div>
        ) : null}
      </div>
    </main>
  );
};

interface MetricHighlightProps {
  label: string;
  value: string;
  accent: string;
}

const MetricHighlight = ({ label, value, accent }: MetricHighlightProps) => (
  <div>
    <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-foreground/50">{label}</p>
    <p className={clsx('mt-1 text-2xl font-display', accent)}>{value}</p>
  </div>
);
