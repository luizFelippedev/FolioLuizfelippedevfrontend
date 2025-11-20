import { Link, useRouteError } from 'react-router-dom';
import { FiAlertTriangle, FiHome, FiRefreshCw } from 'react-icons/fi';

export const ErrorPage = () => {
  const error = useRouteError() as { statusText?: string; message?: string };
  const message = error?.statusText || error?.message || 'Algo inesperado ocorreu.';

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,128,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(0,232,255,0.2),transparent_35%)]" />
      <div className="section-shell flex min-h-screen flex-col items-center justify-center gap-6 py-24 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-400/40 bg-red-500/10 text-red-300 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <FiAlertTriangle size={24} />
        </div>
        <h1 className="text-4xl font-display">Erro</h1>
        <p className="max-w-xl text-sm text-foreground/70">{message}</p>
        <div className="flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em]">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-foreground/80 transition hover:border-accent/40 hover:text-accent"
          >
            <FiRefreshCw /> Tentar novamente
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-foreground transition hover:border-accent/70"
          >
            <FiHome /> Home
          </Link>
        </div>
      </div>
    </main>
  );
};
