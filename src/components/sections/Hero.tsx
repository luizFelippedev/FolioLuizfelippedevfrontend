import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { MatrixPattern } from '../common/MatrixPattern';

const container: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.8, ease: 'easeOut' }
  }
};

export const Hero = () => {
  const { t } = useTranslation();
  const badges = t('hero.badges', { returnObjects: true }) as string[];
  const highlightCards = t('hero.highlights', { returnObjects: true }) as { title: string; description: string }[];
  const stats = t('hero.stats', { returnObjects: true }) as { value: string; label: string; detail: string }[];

  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden>
        <div className="glow-card"></div>
        <MatrixPattern />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="section-shell flex flex-col gap-10 text-center"
      >
        <motion.div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-foreground/60">
          {badges.map((badge) => (
            <span key={badge} className="rounded-full border border-foreground/15 px-4 py-2 text-[0.65rem]">
              {badge}
            </span>
          ))}
        </motion.div>
        <motion.p className="text-sm uppercase tracking-[0.4em] text-foreground/60">{t('hero.subtitle')}</motion.p>
        <motion.h1 className="text-4xl font-display leading-tight text-foreground md:text-6xl">
          {t('hero.title.prefix')} <span className="gradient-text">{t('hero.title.highlight')}</span>
        </motion.h1>

        <motion.p className="mx-auto max-w-3xl text-lg text-foreground/70">{t('hero.description')}</motion.p>

        <motion.div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-8 py-3 text-sm uppercase tracking-[0.3em] text-accent transition hover:bg-accent/10"
          >
            {t('cta.primary')} <span aria-hidden>↗</span>
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-foreground/20 px-8 py-3 text-sm uppercase tracking-[0.3em] text-foreground/80 transition hover:border-secondary/50 hover:text-secondary"
          >
            {t('cta.secondary')}
          </Link>
        </motion.div>

        <motion.div className="grid gap-4 md:grid-cols-3">
          {highlightCards.map((highlight) => (
            <div key={highlight.title} className="glass-panel p-6 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-foreground/60">{highlight.title}</p>
              <p className="mt-2 text-sm text-foreground/80">{highlight.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-4 rounded-3xl border border-foreground/10 bg-foreground/[0.02] p-6 backdrop-blur-2xl md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <p className="text-4xl font-display text-accent">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.35em] text-foreground/40">{stat.label}</p>
              <p className="mt-2 text-sm text-foreground/70">{stat.detail}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
