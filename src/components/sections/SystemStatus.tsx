import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiAward, FiBookOpen, FiLayers, FiRadio } from 'react-icons/fi';

import { api } from '@lib/api';
import { SectionHeader } from '@components/common/SectionHeader';

interface StatusSummary {
  projects: number;
  blog: number;
  certificates: number;
  labs: number;
}

const fetchStatus = async (): Promise<StatusSummary> => {
  const response = await api.get('/status/summary');
  return response.data.data ?? { projects: 0, blog: 0, certificates: 0, labs: 0 };
};

export const SystemStatus = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({ queryKey: ['home-system-status'], queryFn: fetchStatus, staleTime: 1000 * 60 });

  const cards = [
    {
      key: 'projects',
      icon: FiLayers,
      value: data?.projects ?? 0,
      label: t('systemStatus.cards.projects.label'),
      hint: t('systemStatus.cards.projects.hint')
    },
    {
      key: 'blog',
      icon: FiBookOpen,
      value: data?.blog ?? 0,
      label: t('systemStatus.cards.blog.label'),
      hint: t('systemStatus.cards.blog.hint')
    },
    {
      key: 'certificates',
      icon: FiAward,
      value: data?.certificates ?? 0,
      label: t('systemStatus.cards.certificates.label'),
      hint: t('systemStatus.cards.certificates.hint')
    },
    {
      key: 'labs',
      icon: FiRadio,
      value: data?.labs ?? 0,
      label: t('systemStatus.cards.labs.label'),
      hint: t('systemStatus.cards.labs.hint')
    }
  ];

  return (
    <section className="section-shell py-16">
      <SectionHeader
        eyebrow={t('systemStatus.eyebrow')}
        title={t('systemStatus.title')}
        description={t('systemStatus.description')}
        cta={{ label: t('systemStatus.cta'), to: '/admin' }}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.article
              key={card.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/5 bg-background/70 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-foreground/50">
                <span className="rounded-2xl border border-white/10 bg-white/5 p-3 text-foreground">
                  <Icon />
                </span>
                <span>{card.hint}</span>
              </div>
              <p className="mt-5 text-5xl font-display text-foreground">
                {isLoading ? '…' : card.value.toString().padStart(2, '0')}
              </p>
              <p className="mt-2 text-sm text-foreground/70">{card.label}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-6 flex justify-end">
        <Link
          to="/admin"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground/70 transition hover:border-accent/40 hover:text-accent"
        >
          {t('systemStatus.cta')}
        </Link>
      </div>
    </section>
  );
};
