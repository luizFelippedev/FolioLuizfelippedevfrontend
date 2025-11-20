import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiClock, FiMail, FiShield, FiTool, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type FAQItem = {
  question: string;
  answer: string;
  icon: 'timeline' | 'stack' | 'support' | 'engagement' | 'contact';
};

const iconMap = {
  timeline: FiClock,
  stack: FiTool,
  support: FiShield,
  engagement: FiUsers,
  contact: FiMail
};

export const FAQPage = () => {
  const { t } = useTranslation();
  const faqs = t('faq.items', { returnObjects: true }) as FAQItem[];

  return (
    <main className="section-shell space-y-10 py-24">
      <header className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-r from-background via-background/70 to-background/40 p-10 shadow-[0_32px_90px_rgba(0,0,0,0.48)]">
        <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_18%_20%,rgba(0,232,255,0.18),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(204,95,255,0.26),transparent_30%)]" />
        <div className="relative flex flex-col items-center gap-4 text-center">
          <p className="rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1 text-[0.65rem] uppercase tracking-[0.45em] text-foreground/60">
            {t('faq.eyebrow')}
          </p>
          <h1 className="text-3xl font-display text-foreground md:text-4xl">{t('faq.title')}</h1>
          <p className="max-w-3xl text-sm text-foreground/75">{t('faq.subtitle')}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-foreground/70">
            <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1">Discovery + Sprints</span>
            <span className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1">UI avançada</span>
            <span className="rounded-full border border-success/20 bg-success/5 px-3 py-1">Observabilidade</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/contact"
              className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-[0.78rem] font-semibold text-foreground shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition hover:scale-[1.01]"
            >
              {t('cta.secondary')}
            </Link>
            <Link
              to="/projects"
              className="rounded-full border border-foreground/15 px-4 py-2 text-[0.78rem] text-foreground/80 transition hover:border-accent/40 hover:text-accent"
            >
              {t('cta.primary')}
            </Link>
          </div>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        {faqs.map((item, index) => {
          const Icon = iconMap[item.icon] ?? FiTool;
          return (
            <motion.article
              key={item.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex gap-3 rounded-3xl border border-foreground/10 bg-background/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/5 text-accent">
                <Icon />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
                <p className="text-sm text-foreground/70">{item.answer}</p>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="glass-panel relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/80 p-6 text-center text-sm text-foreground/75 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(93,102,255,0.2),transparent_45%)]" />
        <div className="relative space-y-2">
          <p className="text-[0.8rem] uppercase tracking-[0.35em] text-foreground/55">Apoio humano</p>
          <p className="text-foreground/80">
            {t('privacyPage.intro')}
          </p>
          <div className="flex justify-center gap-3 text-xs text-foreground/70">
            <span className="rounded-full border border-foreground/10 px-3 py-1">Resposta rápida</span>
            <span className="rounded-full border border-foreground/10 px-3 py-1">Playbooks & Docs</span>
            <span className="rounded-full border border-foreground/10 px-3 py-1">Workshops</span>
          </div>
        </div>
      </div>
    </main>
  );
};
