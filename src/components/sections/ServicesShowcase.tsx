import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type ServiceCard = {
  title: string;
  detail: string;
  items: string[];
};

export const ServicesShowcase = () => {
  const { t } = useTranslation();
  const cards = t('servicesSection.cards', { returnObjects: true }) as ServiceCard[];

  return (
    <section className="section-shell space-y-8">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-foreground/50">{t('servicesSection.eyebrow')}</p>
        <h2 className="text-3xl font-display text-foreground md:text-4xl">{t('servicesSection.title')}</h2>
        <p className="mx-auto max-w-3xl text-sm text-foreground/70">{t('servicesSection.description')}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4 rounded-[28px] border border-foreground/10 bg-foreground/[0.03] p-6 text-left"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-accent">{card.title}</p>
              <p className="mt-2 text-sm text-foreground/80">{card.detail}</p>
            </div>
            <ul className="space-y-2 text-sm text-foreground/65">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-secondary/70" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-accent transition hover:bg-accent/10"
        >
          {t('servicesSection.ctaPrimary')}
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-foreground/75 transition hover:border-foreground/50"
        >
          {t('servicesSection.ctaSecondary')}
        </Link>
      </div>
    </section>
  );
};
