import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { AboutHighlight } from '@data/experience';

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const AboutSection = () => {
  const { t } = useTranslation();
  const highlights = t('about.highlights', { returnObjects: true }) as AboutHighlight[];
  const chips = t('about.chips', { returnObjects: true }) as string[];

  return (
    <section className="section-shell grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/45">{t('about.badge')}</p>
        <h2 className="text-3xl font-display text-foreground">{t('about.title')}</h2>
        <p className="text-foreground/70 text-lg">{t('about.description')}</p>
        <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
          {chips.map((chip) => (
            <span key={chip} className="rounded-full border border-foreground/15 px-4 py-2 uppercase tracking-[0.3em]">
              {chip}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-accent transition hover:bg-accent/10"
          >
            {t('cta.secondary')} <span aria-hidden>↗</span>
          </Link>
          <a
            href="/assets/resume.html"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-secondary/40 hover:text-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Currículo · HTML
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="glass-panel space-y-4 p-6"
      >
        {highlights.map((highlight) => (
          <div key={highlight.title} className="rounded-2xl border border-foreground/10 bg-foreground/5 p-4">
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{highlight.title}</p>
            <p className="mt-2 text-sm text-foreground/80">{highlight.description}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-secondary">{highlight.metrics}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
