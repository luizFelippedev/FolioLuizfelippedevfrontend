import { useTranslation } from 'react-i18next';

import { skills, type SkillItem, type TechPillar } from '@data/skills';

const duplicatedSkills: SkillItem[] = [...skills, ...skills];

export const SkillsMarquee = () => {
  const { t } = useTranslation();
  const pillars = t('skills.pillars', { returnObjects: true }) as TechPillar[];

  return (
    <section className="section-shell relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent" />
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-foreground/45">{t('skills.badge')}</p>
        <h3 className="mt-3 font-display text-2xl">{t('skills.title')}</h3>
        <p className="mt-2 text-sm text-foreground/65">{t('skills.description')}</p>
      </div>
      <div className="space-y-4">
        <div className="marquee">
          <div className="marquee-track">
            {duplicatedSkills.map((skillItem, index) => {
              const Icon = skillItem.icon;
              return (
                <span key={`${skillItem.name}-${index}`} className="marquee-pill">
                  <Icon aria-hidden className="marquee-icon" />
                  {skillItem.name}
                </span>
              );
            })}
          </div>
        </div>
        <div className="marquee">
          <div className="marquee-track reverse">
            {duplicatedSkills.map((skillItem, index) => {
              const Icon = skillItem.icon;
              return (
                <span key={`${skillItem.name}-reverse-${index}`} className="marquee-pill alt">
                  <Icon aria-hidden className="marquee-icon" />
                  {skillItem.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="glass-panel h-full space-y-3 p-6 text-left">
            <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{pillar.title}</p>
            <p className="text-sm text-foreground/80">{pillar.description}</p>
            <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/60">
              {pillar.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-foreground/15 px-3 py-1">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
