import { useTranslation } from 'react-i18next';
import { FiDatabase, FiHelpCircle, FiLock, FiShieldOff, FiSmartphone, FiTrash2 } from 'react-icons/fi';

const privacyIcons: Record<string, React.ElementType> = {
  data: FiDatabase,
  cookies: FiSmartphone,
  security: FiLock,
  sharing: FiShieldOff,
  contact: FiTrash2
};

export const PrivacyPage = () => {
  const { t } = useTranslation();
  const items = t('privacyPage.items', { returnObjects: true }) as Record<string, string>;

  return (
    <main className="page-shell space-y-10 py-24">
      <header className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-r from-background via-background/70 to-background/50 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_10%_10%,rgba(0,232,255,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(204,95,255,0.25),transparent_30%)]" />
        <div className="relative space-y-3">
          <p className="inline-flex rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.45em] text-foreground/60">
            {t('privacyPage.eyebrow')}
          </p>
          <h1 className="text-3xl font-display text-foreground md:text-4xl">{t('privacyPage.title')}</h1>
          <p className="max-w-3xl text-sm text-foreground/75">{t('privacyPage.subtitle')}</p>
          <div className="flex flex-wrap gap-3 text-xs text-foreground/70">
            <span className="rounded-full border border-success/15 bg-success/5 px-3 py-1">GDPR-friendly</span>
            <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1">Sem venda de dados</span>
            <span className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1">Transparência total</span>
          </div>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="glass-panel space-y-3 p-6 text-sm text-foreground/80">
            <p className="text-[0.95rem] text-foreground/85">{t('privacyPage.intro')}</p>
            <div className="grid gap-3 md:grid-cols-2">
              {Object.entries(items).map(([key, value]) => {
                const Icon = privacyIcons[key] ?? FiHelpCircle;
                return (
                  <div
                    key={key}
                    className="rounded-2xl border border-foreground/10 bg-foreground/5 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
                  >
                    <div className="mb-2 flex items-center gap-2 text-foreground">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-foreground/10 bg-background/70 text-accent">
                        <Icon />
                      </span>
                      <p className="text-[0.8rem] uppercase tracking-[0.3em] text-foreground/60">{key}</p>
                    </div>
                    <p className="text-foreground/75">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-4">
          <div className="glass-panel space-y-2 p-5 text-sm text-foreground/80">
            <h3 className="text-base font-semibold text-foreground">{t('privacyPage.eyebrow')}</h3>
            <p className="text-foreground/70">{t('privacyPage.outro')}</p>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-success/10 via-accent/10 to-background p-5 text-foreground shadow-[0_20px_60px_rgba(0,0,0,0.32)]">
            <h4 className="text-sm uppercase tracking-[0.25em] text-foreground/70">Segurança & Observabilidade</h4>
            <p className="mt-2 text-sm text-foreground/80">
              {t('termsPage.subtitle')}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-foreground/75">
              <span className="rounded-full border border-foreground/10 px-3 py-1">Logs estruturados</span>
              <span className="rounded-full border border-foreground/10 px-3 py-1">Alertas realtime</span>
              <span className="rounded-full border border-foreground/10 px-3 py-1">Backup automático</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};
