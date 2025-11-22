import { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { ParticleField } from '@components/ui/ParticleField';
import { NeonGridBackground } from '@components/ui/NeonGridBackground';
import { MobileMaintenanceBanner } from '@components/ui/MobileMaintenanceBanner';

export const AppLayout = () => {
  const navigation = useNavigation();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const isLoading = navigation.state === 'loading' || initialLoading;

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <NeonGridBackground />
      <ParticleField />
      <Header />
      <MobileMaintenanceBanner />
      {isLoading ? (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-xl">
          <div className="relative flex flex-col items-center gap-4 rounded-3xl border border-white/5 bg-gradient-to-br from-background/80 via-background/60 to-background/80 px-7 py-6 shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-2 border-dashed border-accent/25" />
              <div className="absolute inset-1.5 animate-[spin_3s_linear_infinite] rounded-full border-2 border-secondary/35" />
              <div className="absolute inset-3 flex items-center justify-center rounded-full bg-gradient-to-br from-accent/30 via-secondary/30 to-accent/20 shadow-[0_10px_35px_rgba(0,0,0,0.45)]">
                <div className="h-6 w-6 animate-pulse rounded-full bg-white/70 shadow-[0_0_25px_rgba(255,255,255,0.35)]" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-[0.65rem] uppercase tracking-[0.4em] text-foreground/60">Sincronizando</p>
              <p className="text-sm font-semibold text-foreground">Seu painel está carregando</p>
            </div>
            <div className="flex items-center gap-2 text-[0.65rem] text-foreground/60">
              <span className="h-2 w-2 animate-pulse rounded-full bg-secondary shadow-[0_0_12px_rgba(0,255,200,0.5)]" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent shadow-[0_0_12px_rgba(120,80,255,0.5)]" style={{ animationDelay: '120ms' }} />
              <span className="h-2 w-2 animate-pulse rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.5)]" style={{ animationDelay: '240ms' }} />
            </div>
          </div>
        </div>
      ) : null}
      <Outlet />
      <Footer />
    </div>
  );
};
