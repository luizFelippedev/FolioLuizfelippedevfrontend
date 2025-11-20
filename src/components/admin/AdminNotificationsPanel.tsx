import { useNotifications } from '@hooks/useNotifications';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const typeColors: Record<string, string> = {
  info: 'text-foreground/70 border-foreground/10',
  success: 'text-emerald-300 border-emerald-500/40',
  warning: 'text-amber-300 border-amber-400/40',
  error: 'text-red-300 border-red-400/40'
};

export const AdminNotificationsPanel = () => {
  const { t, i18n } = useTranslation();
  const { messages, connected, stats } = useNotifications();

  return (
    <section className="rounded-[32px] border border-foreground/10 bg-foreground/[0.02] p-6 text-sm text-foreground/70">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{t('admin.metrics.alertsTitle', 'Realtime alerts')}</p>
          <p className={clsx('text-xs uppercase tracking-[0.35em]', connected ? 'text-emerald-300' : 'text-red-400')}>
            {connected ? t('admin.metrics.values.synced') : t('admin.metrics.values.syncing')}
          </p>
        </div>
        <div className="rounded-full border border-foreground/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground/50">
          {t('admin.metrics.alertsActive', { count: stats.activeUsers })}
        </div>
      </div>

      <div className="mt-4 space-y-3 max-h-80 overflow-auto pr-1">
        {messages.length === 0 ? (
          <p className="text-xs text-foreground/50">{t('common.states.empty')}</p>
        ) : (
          messages.map((message, index) => (
            <article
              key={`${message.timestamp}-${index}`}
              className={clsx(
                'rounded-2xl border px-4 py-3 text-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)]',
                typeColors[message.type] ?? typeColors.info
              )}
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em]">
                <span>{message.title}</span>
                <span className="text-foreground/50">
                  {new Intl.DateTimeFormat(i18n.language, {
                    hour: '2-digit',
                    minute: '2-digit'
                  }).format(new Date(message.timestamp))}
                </span>
              </div>
              <p className="mt-2 text-foreground/80">{message.message}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
};
