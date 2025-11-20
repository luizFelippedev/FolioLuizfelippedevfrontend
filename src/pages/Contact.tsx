import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi';
import clsx from 'clsx';

import { MatrixPattern } from '@components/common/MatrixPattern';

type ContactChannelCopy = {
  label: string;
  hint: string;
  action: string;
};

type ContactChannels = {
  email: ContactChannelCopy;
  social: ContactChannelCopy;
};

type ContactMethod = {
  key: string;
  value: string;
  href: string;
  icon: React.ComponentType;
  copy?: boolean;
  label: string;
  hint: string;
  action: string;
};

export const ContactPage = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const channels = t('contactSection.channels', { returnObjects: true }) as ContactChannels;

  const contactMethods: ContactMethod[] = useMemo(
    () => [
      {
        key: 'email',
        value: 'luizfelippeandrade@outlook.com',
        href: 'mailto:luizfelippeandrade@outlook.com',
        icon: FiMail,
        copy: true,
        ...channels.email
      },
      {
        key: 'instagram',
        value: '@luizfelippe.e',
        href: 'https://www.instagram.com/luizfelippe.e',
        icon: FiInstagram,
        copy: false,
        ...channels.social
      },
      {
        key: 'linkedin',
        value: 'linkedin.com/in/luizfelippeandrade',
        href: 'https://www.linkedin.com/in/luizfelippeandrade',
        icon: FiLinkedin,
        copy: false,
        ...channels.social
      }
    ],
    [channels]
  );

  const handleCopy = async (text: string) => {
    try {
      if (typeof navigator === 'undefined' || !navigator.clipboard) return;
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-20 opacity-30">
        <MatrixPattern />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(0,232,255,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(204,95,255,0.18),transparent_35%)]" />

      <div className="section-shell space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-r from-background via-background/70 to-background/50 p-7 shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
        >
          <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_10%_10%,rgba(93,102,255,0.25),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(0,232,255,0.2),transparent_32%)]" />
          <div className="relative space-y-3">
            <p className="inline-flex rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.45em] text-foreground/60">
              {t('contactPage.eyebrow')}
            </p>
            <h1 className="text-4xl font-display text-foreground md:text-5xl">{t('contactPage.title')}</h1>
            <p className="max-w-3xl text-foreground/75">{t('contactPage.description')}</p>
            <div className="flex flex-wrap gap-2 text-[0.75rem] text-foreground/70">
              <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1">Contato direto</span>
              <span className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1">Empresas & produtos críticos</span>
              <span className="rounded-full border border-success/20 bg-success/5 px-3 py-1">Resposta rápida</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.key}
                className="flex items-center justify-between gap-4 rounded-3xl border border-foreground/10 bg-background/80 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.32)]"
              >
                <div className="flex items-center gap-4">
                  <span className="rounded-2xl border border-foreground/15 bg-black/30 p-3 text-accent">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-foreground/55">{method.label}</p>
                    <p className="text-lg font-semibold text-foreground">{method.value}</p>
                    <p className="text-xs text-foreground/60">{method.hint}</p>
                  </div>
                </div>
                {method.copy ? (
                  <button
                    type="button"
                    onClick={() => handleCopy(method.value)}
                    className={clsx(
                      'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition',
                      copied
                        ? 'border-success/40 bg-success/10 text-success'
                        : 'border-foreground/15 text-foreground/75 hover:border-accent/40 hover:text-accent'
                    )}
                  >
                    {copied ? t('contactSection.copyState.success') : method.action}
                  </button>
                ) : (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-foreground/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/75 transition hover:border-accent/40 hover:text-accent"
                  >
                    {method.action}
                  </a>
                )}
              </div>
            );
          })}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="rounded-3xl border border-foreground/10 bg-background/75 p-6 text-sm text-foreground/70 shadow-[0_20px_70px_rgba(0,0,0,0.4)]"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/55">Resumo</p>
          <p className="mt-2 text-foreground/80">
            Foco em empresas que precisam de entrega direta: email para propostas e integração, Instagram/LinkedIn para contato rápido.
            Respondo em janela curta e direciono para discovery quando for enterprise.
          </p>
        </motion.section>
      </div>
    </main>
  );
};
