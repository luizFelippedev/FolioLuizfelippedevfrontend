import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiExternalLink, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

import { MatrixPattern } from '../common/MatrixPattern';

type ContactChannel = { label: string; hint: string; action: string };
type ContactChannels = {
  email: ContactChannel;
  social: ContactChannel;
};
type CopyFeedback = { success: string };

export const ContactCTA = () => {
  const { t } = useTranslation();
  const channelsCopy = t('contactSection.channels', { returnObjects: true }) as ContactChannels;
  const copyFeedback = t('contactSection.copyState', { returnObjects: true }) as CopyFeedback;
  const [copied, setCopied] = useState(false);

  const handleCopy = async (value: string) => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(value);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.warn('Copy failed', error);
    }
  };

  const channelItems = [
    {
      key: 'email',
      value: 'luizfelippeandrade@outlook.com',
      href: 'mailto:luizfelippeandrade@outlook.com',
      icon: FiMail,
      copy: true,
      ...channelsCopy.email
    },
    {
      key: 'instagram',
      value: '@luizfelippe.e',
      href: 'https://www.instagram.com/luizfelippe.e',
      icon: FiInstagram,
      copy: false,
      ...channelsCopy.social
    },
    {
      key: 'linkedin',
      value: 'linkedin.com/in/luizfelippeandrade',
      href: 'https://www.linkedin.com/in/luizfelippeandrade',
      icon: FiLinkedin,
      copy: false,
      ...channelsCopy.social
    }
  ];

  return (
    <section className="relative py-20">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[48px] border border-foreground/10 bg-background/70 p-6 shadow-[0_45px_160px_rgba(0,0,0,0.55)] lg:p-12">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-secondary/15 blur-3xl" />
            <MatrixPattern />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xs uppercase tracking-[0.5em] text-foreground/60">{t('contactSection.eyebrow')}</p>
              <h2 className="text-4xl font-display leading-tight">{t('contactSection.headline')}</h2>
              <p className="text-sm text-foreground/70">{t('contactSection.subheadline')}</p>

              <div className="flex flex-wrap gap-2 text-[0.75rem] text-foreground/70">
                <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1">Contato direto</span>
                <span className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1">Projetos enterprise</span>
                <span className="rounded-full border border-success/20 bg-success/5 px-3 py-1">Resposta rápida</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="space-y-4">
                {channelItems.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.key}
                      className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-foreground/10 bg-background/70 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="rounded-2xl border border-foreground/15 bg-black/30 p-3 text-accent">
                          <Icon />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.4em] text-foreground/50">{channel.label}</p>
                          <p className="text-lg font-semibold text-foreground">{channel.value}</p>
                          <p className="text-xs text-foreground/60">{channel.hint}</p>
                        </div>
                      </div>
                      {channel.copy ? (
                        <button
                          type="button"
                          onClick={() => handleCopy(channel.value)}
                          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/40 hover:text-accent"
                        >
                          {copied ? copyFeedback.success : channel.action}
                        </button>
                      ) : (
                        <a
                          href={channel.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/80 transition hover:border-accent/40 hover:text-accent"
                        >
                          {channel.action}
                          <FiExternalLink />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="rounded-3xl border border-foreground/10 bg-background/70 p-6 text-sm text-foreground/70 shadow-[0_16px_48px_rgba(0,0,0,0.25)]">
                {t('contactSection.note')}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
