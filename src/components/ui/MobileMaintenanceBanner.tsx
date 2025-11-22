import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiZap } from 'react-icons/fi';

const STORAGE_KEY = 'mobile-maintenance-banner-dismissed-at';
const DISMISS_MS = 60_000;

const getDismissState = () => {
  if (typeof window === 'undefined') return { visible: true, remaining: 0 };
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { visible: true, remaining: 0 };
    const dismissedAt = Number(stored);
    if (Number.isNaN(dismissedAt)) return { visible: true, remaining: 0 };
    const elapsed = Date.now() - dismissedAt;
    const remaining = Math.max(0, DISMISS_MS - elapsed);
    return { visible: elapsed >= DISMISS_MS, remaining };
  } catch {
    return { visible: true, remaining: 0 };
  }
};

export const MobileMaintenanceBanner = () => {
  const [{ visible, remaining }, setState] = useState(getDismissState);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!visible && remaining > 0) {
      timerRef.current = window.setTimeout(() => setState({ visible: true, remaining: 0 }), remaining);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [visible, remaining]);

  const dismiss = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setState({ visible: false, remaining: DISMISS_MS });
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore storage errors */
    }
    timerRef.current = window.setTimeout(() => setState({ visible: true, remaining: 0 }), DISMISS_MS);
  };

  if (!visible) return null;

  return (
    <div className="pointer-events-auto fixed bottom-3 right-3 z-40 w-[min(340px,calc(100%-1rem))] sm:bottom-5 sm:right-5 sm:w-[min(360px,calc(100%-1.5rem))]">
      <div className="relative overflow-hidden rounded-2xl border border-[rgba(var(--color-foreground),0.08)] bg-[rgb(var(--color-background),var(--tw-bg-opacity))] bg-gradient-to-br from-[rgba(var(--color-background),0.94)] via-[rgba(var(--color-background),0.86)] to-[rgba(var(--color-background),0.92)] px-3 py-2.5 pr-11 shadow-[0_18px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_12%_15%,rgba(var(--color-accent),0.16),transparent_38%),radial-gradient(circle_at_88%_10%,rgba(var(--color-secondary),0.14),transparent_34%)]" aria-hidden />
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(var(--color-foreground),0.1)] bg-[rgba(var(--color-foreground),0.06)] text-[11px] text-foreground/65 transition hover:border-[rgba(var(--color-foreground),0.16)] hover:bg-[rgba(var(--color-foreground),0.12)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--color-accent),0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-background))] sm:top-2.5 sm:right-2.5"
          aria-label="Fechar aviso de manutencao mobile"
        >
          <FiX />
        </button>

        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(var(--color-foreground),0.1)] bg-gradient-to-br from-[rgba(var(--color-accent),0.2)] via-[rgba(var(--color-accent),0.12)] to-[rgba(var(--color-secondary),0.18)] text-accent shadow-[0_10px_28px_rgba(0,0,0,0.45)] sm:shrink-0">
            <FiZap className="text-lg" />
          </div>

          <div className="flex flex-1 flex-col gap-1.5 text-sm text-foreground">
            <div className="flex flex-wrap items-center justify-between gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-foreground/65">
              <span className="text-secondary">Mobile</span>
              <span className="text-accent">Manutencao</span>
            </div>
            <p className="text-[0.8rem] leading-relaxed text-foreground/78">Mobile em manutencao. Use a versao desktop.</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.28em] text-secondary">
                <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_0_6px_rgba(44,182,125,0.16)]" />
                <span>Mobile</span>
              </div>
              <Link
                to="/patchnotes"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--color-foreground),0.12)] bg-[rgba(var(--color-foreground),0.06)] px-3.5 py-[6px] text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-foreground transition hover:border-[rgba(var(--color-secondary),0.6)] hover:bg-[rgba(var(--color-secondary),0.12)] hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(var(--color-secondary),0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--color-background))]"
              >
                Acompanhando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
