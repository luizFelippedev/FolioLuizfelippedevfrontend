import { useEffect, useState } from 'react';

import { useMediaQuery } from '@hooks/useMediaQuery';

export const MobileMaintenanceBanner = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('mobile-maintenance-dismissed') === 'true';
  });

  useEffect(() => {
    if (!isMobile) return;
    const storedValue = localStorage.getItem('mobile-maintenance-dismissed');
    setDismissed(storedValue === 'true');
  }, [isMobile]);

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mobile-maintenance-dismissed', 'true');
    }
  };

  if (!isMobile || dismissed) return null;

  return (
    <div className="sticky top-[5.25rem] z-40 flex items-start gap-3 border-b border-accent/30 bg-background/90 px-4 py-3 backdrop-blur-lg sm:px-6">
      <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 via-secondary/40 to-accent/25 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <span className="text-lg">🚧</span>
      </div>
      <div className="flex flex-1 flex-col gap-1 text-sm leading-relaxed text-foreground">
        <p className="font-semibold text-foreground">Estamos em manutenção para mobile</p>
        <p className="text-foreground/80">
          Estamos ajustando layout, design e responsividade para melhorar sua experiência no celular. Algumas seções podem parecer
          diferentes temporariamente.
        </p>
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm text-foreground/80 transition hover:border-white/20 hover:bg-white/10 hover:text-foreground"
        aria-label="Fechar aviso de manutenção"
      >
        ✕
      </button>
    </div>
  );
};
