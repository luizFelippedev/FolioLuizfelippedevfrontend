import { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Hero } from '@components/sections/Hero';

const SkillsMarquee = lazy(() => import('@components/sections/SkillsMarquee').then((m) => ({ default: m.SkillsMarquee })));
const AboutSection = lazy(() => import('@components/sections/AboutSection').then((m) => ({ default: m.AboutSection })));
const ExperienceTimeline = lazy(() =>
  import('@components/sections/ExperienceTimeline').then((m) => ({ default: m.ExperienceTimeline }))
);
const ServicesShowcase = lazy(() =>
  import('@components/sections/ServicesShowcase').then((m) => ({ default: m.ServicesShowcase }))
);
const ProjectsSpotlight = lazy(() =>
  import('@components/sections/ProjectsSpotlight').then((m) => ({ default: m.ProjectsSpotlight }))
);
const SystemStatus = lazy(() => import('@components/sections/SystemStatus').then((m) => ({ default: m.SystemStatus })));
const CertificatesGrid = lazy(() =>
  import('@components/sections/CertificatesGrid').then((m) => ({ default: m.CertificatesGrid }))
);
const LabsShowcase = lazy(() => import('@components/sections/LabsShowcase').then((m) => ({ default: m.LabsShowcase })));
const BlogPreview = lazy(() => import('@components/sections/BlogPreview').then((m) => ({ default: m.BlogPreview })));
const ContactCTA = lazy(() => import('@components/sections/ContactCTA').then((m) => ({ default: m.ContactCTA })));

export const Home = () => {
  const { t } = useTranslation();

  const LazyShell = ({ height = 'h-48' }: { height?: string }) => (
    <div className={`animate-pulse rounded-3xl border border-foreground/10 bg-foreground/5 ${height}`} />
  );

  return (
    <main className="relative flex flex-col gap-20 overflow-hidden pb-28 pt-32">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(1200px_900px_at_18%_12%,rgba(127,90,240,0.2),transparent_55%),radial-gradient(1200px_900px_at_85%_15%,rgba(34,197,94,0.18),transparent_50%),radial-gradient(1000px_800px_at_50%_88%,rgba(14,165,233,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-30 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_38%)] blur-3xl" />
      </div>
      <Hero />

      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[32px] border border-foreground/10 bg-gradient-to-r from-background via-background/70 to-background/45 p-8 shadow-[0_32px_100px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_12%_8%,rgba(93,102,255,0.3),transparent_35%),radial-gradient(circle_at_88%_0%,rgba(0,232,255,0.22),transparent_30%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-3">
              <p className="inline-flex rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.45em] text-foreground/60">
                {t('projectsPage.eyebrow')}
              </p>
              <h2 className="text-3xl font-display text-foreground md:text-4xl">{t('projectsPage.heroTitle')}</h2>
              <p className="max-w-3xl text-sm text-foreground/70">{t('projectsPage.heroDescription')}</p>
              <div className="flex flex-wrap gap-2 text-xs text-foreground/70">
                <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1">Realtime dashboards</span>
                <span className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1">APIs & DevOps</span>
                <span className="rounded-full border border-success/20 bg-success/5 px-3 py-1">UI imersiva</span>
              </div>
            </div>
            <div className="glass-panel relative space-y-3 rounded-3xl border border-foreground/10 bg-background/70 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
              <div className="grid gap-2 text-xs uppercase tracking-[0.35em] text-foreground/60 sm:grid-cols-2">
                <span className="rounded-2xl border border-foreground/10 bg-foreground/5 px-3 py-2">CI/CD</span>
                <span className="rounded-2xl border border-foreground/10 bg-foreground/5 px-3 py-2">Observability</span>
                <span className="rounded-2xl border border-foreground/10 bg-foreground/5 px-3 py-2">AI workflows</span>
                <span className="rounded-2xl border border-foreground/10 bg-foreground/5 px-3 py-2">UX premium</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-[0.78rem] font-semibold text-foreground transition hover:scale-[1.01]"
                >
                  {t('projectsPage.title')}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-[0.78rem] text-foreground/80 transition hover:border-accent/40 hover:text-accent"
                >
                  {t('cta.secondary')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<LazyShell height="h-20" />}>
        <SkillsMarquee />
      </Suspense>
      <Suspense fallback={<LazyShell height="h-64" />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<LazyShell height="h-72" />}>
        <ExperienceTimeline />
      </Suspense>
      <Suspense fallback={<LazyShell height="h-64" />}>
        <ServicesShowcase />
      </Suspense>
      <Suspense fallback={<LazyShell height="h-80" />}>
        <ProjectsSpotlight />
      </Suspense>
      <Suspense fallback={<LazyShell height="h-72" />}>
        <SystemStatus />
      </Suspense>
      <Suspense fallback={<LazyShell height="h-72" />}>
        <CertificatesGrid />
      </Suspense>
      <Suspense fallback={<LazyShell height="h-64" />}>
        <LabsShowcase />
      </Suspense>
      <Suspense fallback={<LazyShell height="h-64" />}>
        <BlogPreview />
      </Suspense>
      <Suspense fallback={<LazyShell height="h-80" />}>
        <ContactCTA />
      </Suspense>
    </main>
  );
};
