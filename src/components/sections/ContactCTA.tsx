import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiExternalLink, FiInstagram, FiMail, FiMessageCircle, FiZap } from 'react-icons/fi';

import { MatrixPattern } from '../common/MatrixPattern';

type QuickCard = { title: string; detail: string };
type ContactChannel = { label: string; hint: string; action: string };
type ContactChannels = {
  email: ContactChannel;
  social: ContactChannel;
};
type CopyFeedback = { success: string };

export const ContactCTA = () => {
  const { t } = useTranslation();
  const channelsCopy = t('contactSection.channels', { returnObjects: true }) as ContactChannels;
  const chips = t('contactSection.chips', { returnObjects: true }) as string[];
  const quickCards = t('contactSection.quickCards', { returnObjects: true }) as QuickCard[];
  const copyFeedback = t('contactSection.copyState', { returnObjects: true }) as CopyFeedback;
  const responseBadge = t('contactSection.responseBadge');
  const personal = t('contactSection.personal', { returnObjects: true }) as {
    title: string;
    detail: string;
    cta: string;
  };
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
    }
  ];
  const primaryEmailHref = channelItems[0]?.href ?? 'mailto:luizfelippeandrade@outlook.com';

  const chipStyles = [
    'border-accent/30 bg-accent/10 shadow-[0_8px_24px_rgba(0,186,255,0.18)]',
    'border-secondary/30 bg-secondary/10 shadow-[0_8px_24px_rgba(255,255,255,0.08)]',
    'border-success/30 bg-success/10 shadow-[0_8px_24px_rgba(16,185,129,0.18)]',
    'border-foreground/20 bg-foreground/5'
  ];

  return (
    <section className="relative py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_18%,rgba(0,186,255,0.12),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.05),transparent_30%)]" />
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[48px] border border-foreground/10 bg-background/70 p-6 shadow-[0_45px_160px_rgba(0,0,0,0.55)] lg:p-12">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,186,255,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_35%)] blur-3xl" />
            <MatrixPattern />
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-2 text-success shadow-[0_0_0_6px_rgba(16,185,129,0.08)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                  </span>
                  {t('contactSection.eyebrow')}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-3 py-2 text-foreground/70">
                  <FiZap className="text-[0.8rem]" />
                  <span className="tracking-[0.2em]">{responseBadge}</span>
                </span>
              </div>
              <h2 className="text-4xl font-display leading-tight">{t('contactSection.headline')}</h2>
              <p className="text-base text-foreground/70">{t('contactSection.subheadline')}</p>

              <div className="flex flex-wrap gap-3 text-[0.8rem] text-foreground/80">
                {chips.map((chip, idx) => (
                  <span
                    key={chip}
                    className={`rounded-full px-4 py-2 ${chipStyles[idx] ?? 'border-foreground/20 bg-foreground/5'}`}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickCards.map((card, idx) => (
                  <div
                    key={card.title}
                    className={`rounded-2xl border border-foreground/10 p-4 text-sm text-foreground/80 shadow-[0_16px_48px_rgba(0,0,0,0.35)] backdrop-blur ${
                      idx % 2 === 0 ? 'bg-black/30' : 'bg-foreground/5'
                    }`}
                  >
                    <p className="text-foreground">{card.title}</p>
                    <p className="text-xs text-foreground/60">{card.detail}</p>
                  </div>
                ))}
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-r from-background/80 via-background/60 to-background/80 p-[1px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,186,255,0.16),transparent_40%),radial-gradient(circle_at_85%_50%,rgba(255,255,255,0.06),transparent_40%)] opacity-60 transition group-hover:opacity-90" />
                <div className="relative flex flex-col gap-4 rounded-[26px] bg-background/80 p-5 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/80 via-secondary/70 to-success/70 text-base font-semibold text-background shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                      LF
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{personal.title}</p>
                      <p className="text-xs text-foreground/70">{personal.detail}</p>
                    </div>
                  </div>
                  <a
                    href={primaryEmailHref}
                    className="inline-flex items-center gap-2 self-start rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-[0.75rem] uppercase tracking-[0.25em] text-accent transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,186,255,0.25)]"
                  >
                    <FiMessageCircle className="text-sm" />
                    {personal.cta}
                  </a>
                </div>
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
                    <motion.div
                      key={channel.key}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                      className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-background/90 via-background/60 to-background/90 p-[1px] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,186,255,0.22),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.06),transparent_40%)] opacity-40 transition group-hover:opacity-80" />
                      <div className="relative flex flex-col gap-4 rounded-[26px] bg-background/80 p-5 backdrop-blur">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="grid h-11 w-11 place-items-center rounded-2xl border border-foreground/15 bg-gradient-to-br from-accent/30 via-foreground/10 to-secondary/20 text-accent shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                              <Icon />
                            </span>
                            <div>
                              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-foreground/50">{channel.label}</p>
                              <p className="text-lg font-semibold text-foreground">{channel.value}</p>
                              <p className="text-xs text-foreground/60">{channel.hint}</p>
                            </div>
                          </div>
                          <span className="rounded-full border border-foreground/15 bg-foreground/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60">
                            {t('contactSection.eyebrow')}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 border-t border-foreground/10 pt-3">
                          {channel.copy ? (
                            <button
                              type="button"
                              onClick={() => handleCopy(channel.value)}
                              className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/10 px-4 py-2 text-[0.75rem] uppercase tracking-[0.25em] text-accent transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,186,255,0.25)]"
                            >
                              {copied ? (
                                <>
                                  <FiCheck className="text-success" />
                                  {copyFeedback.success}
                                </>
                              ) : (
                                channel.action
                              )}
                            </button>
                          ) : (
                            <a
                              href={channel.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-foreground/25 bg-foreground/5 px-4 py-2 text-[0.75rem] uppercase tracking-[0.25em] text-foreground/80 transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent hover:shadow-[0_12px_30px_rgba(0,186,255,0.25)]"
                            >
                              {channel.action}
                              <FiExternalLink />
                            </a>
                          )}

                          <span className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[0.7rem] text-foreground/60">
                            {channel.hint}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
