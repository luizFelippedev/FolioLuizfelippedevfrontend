import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiClock, FiRepeat, FiTool } from 'react-icons/fi';

export const MaintenancePage = () => {
  const { t } = useTranslation();
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,232,255,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(204,95,255,0.18),transparent_35%)]" />
      <div className="section-shell flex min-h-screen flex-col items-center justify-center gap-8 py-24">
        <div className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{t('common.states.loading')}</p>
          <h1 className="text-4xl font-display text-foreground md:text-5xl">Em manutenção</h1>
          <p className="text-sm text-foreground/70 max-w-2xl">
            Estamos aplicando ajustes de infra, CI/CD e novas features. Volte em instantes ou escolha um destino abaixo.
          </p>
        </div>
        <div className="grid gap-4 rounded-[32px] border border-foreground/10 bg-foreground/[0.03] p-6 sm:grid-cols-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <StatusTile icon={<FiTool />} label="Deploy em progresso" value="Rolling update" />
          <StatusTile icon={<FiClock />} label="Janela" value="~ poucos minutos" />
          <StatusTile icon={<FiRepeat />} label="Status" value="Auto-reload" />
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em]">
          <Link to="/" className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-foreground transition hover:border-accent/70">
            Home
          </Link>
          <Link to="/projects" className="rounded-full border border-foreground/20 px-4 py-2 text-foreground/80 transition hover:border-accent/40 hover:text-accent">
            Projetos
          </Link>
          <Link to="/contact" className="rounded-full border border-foreground/20 px-4 py-2 text-foreground/80 transition hover:border-accent/40 hover:text-accent">
            Contato
          </Link>
        </div>
      </div>
    </main>
  );
};

const StatusTile = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="rounded-2xl border border-foreground/10 bg-background/50 p-4 text-center">
    <div className="mb-2 flex justify-center text-accent">{icon}</div>
    <p className="text-[0.7rem] uppercase tracking-[0.35em] text-foreground/50">{label}</p>
    <p className="mt-2 text-lg font-semibold text-foreground">{value}</p>
  </div>
);
