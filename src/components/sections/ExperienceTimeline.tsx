import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import type { ExperienceItem } from '@data/experience';

export const ExperienceTimeline = () => {
  const { t } = useTranslation();
  const experiences = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  return (
    <section className="section-shell py-16">
      <div className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/45">{t('experience.badge')}</p>
        <h2 className="mt-3 text-3xl font-display text-foreground">{t('experience.title')}</h2>
        <p className="mt-3 text-sm text-foreground/65">{t('experience.description')}</p>
      </div>

      <div className="relative before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-accent/40 before:to-transparent md:before:left-1/2">
        <div className="flex flex-col gap-10 md:gap-14">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="relative md:w-1/2 md:self-end md:first:self-start"
            >
              <div
                className="glass-panel relative border border-foreground/10 p-6 text-left md:ml-12 md:w-[95%]"
                style={{ marginLeft: index % 2 === 0 ? '0' : 'auto' }}
              >
                <span className="absolute -left-4 top-6 hidden h-3 w-3 rounded-full border border-accent/60 bg-background md:block" />
                <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{experience.period}</p>
                <h3 className="mt-1 text-2xl font-semibold">{experience.company}</h3>
                <p className="text-sm text-foreground/70">{experience.role}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60">
                  {experience.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-foreground/15 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/75">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2">
                      <span className="text-secondary">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
