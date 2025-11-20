import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { SectionHeader } from '@components/common/SectionHeader';
import { fallbackLabVisual, resolveLabIcon } from '@constants/labs';
import { usePreferencesStore } from '@store/preferencesStore';
import { useLabs } from '@hooks/useLabs';

export const LabsShowcase = () => {
  const { t } = useTranslation();
  const { labs: labState, toggleLab } = usePreferencesStore();
  const { data: labsResponse } = useLabs();
  const labs = labsResponse?.data ?? [];

  const fallbackLabs = (t('settings.labsItems', { returnObjects: true }) as Record<string, { title: string; description: string; status?: string }>) ?? {};
  const fallbackEntries = Object.entries(fallbackLabs).map(([slug, lab]) => ({
    _id: slug,
    slug,
    title: lab.title,
    description: lab.description,
    status: lab.status,
    gradient: undefined,
    icon: slug,
    active: true
  }));

  const labsList = labs.length > 0 ? labs : fallbackEntries;

  if (labsList.length === 0) {
    return null;
  }

  return (
    <section id="labs" className="section-shell py-16">
      <SectionHeader
        eyebrow={t('labsSection.eyebrow')}
        title={t('labsSection.title')}
        description={t('labsSection.description')}
        cta={{ label: t('labsSection.cta'), to: '/admin' }}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {labsList.map((lab, index) => {
          const labKey = lab.slug ?? lab._id;
          const isSubscribed = Boolean(labState[labKey]);
          const gradient = lab.gradient ?? fallbackLabVisual.gradient;
          const Icon = resolveLabIcon(lab.icon);

          return (
            <motion.article
              key={labKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[32px] border border-white/5 bg-background/70 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
                  style={{ background: gradient }}
                >
                  <Icon className="text-xl text-white" />
                </span>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.35em] text-foreground/50">
                    <span>{lab.status ?? t('settings.beta')}</span>
                    <span className="rounded-full border border-foreground/10 px-2 py-1 text-[0.55rem]">
                      {isSubscribed ? t('labsSection.subscribed') : 'Beta'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{lab.title}</h3>
                  <p className="text-sm text-foreground/70">{lab.description}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em]">
                <button
                  type="button"
                  onClick={() => toggleLab(labKey)}
                  className={clsx(
                    'rounded-full border px-4 py-2 transition',
                    isSubscribed
                      ? 'border-secondary/50 bg-secondary/10 text-secondary'
                      : 'border-foreground/20 text-foreground/70 hover:border-secondary/40 hover:text-secondary'
                  )}
                >
                  {isSubscribed ? t('labsSection.subscribed') : t('labsSection.actions.toggle')}
                </button>
                <Link
                  to="/admin"
                  className="rounded-full border border-foreground/15 px-4 py-2 text-foreground/60 transition hover:border-accent/40 hover:text-accent"
                >
                  {t('labsSection.actions.learn')}
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
