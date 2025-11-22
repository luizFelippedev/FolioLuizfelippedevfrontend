import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiChevronUp, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

import profileLogo from '@assets/logo.jpg';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-background/90 text-foreground">
      <div className="page-shell flex flex-col items-center gap-5 border-t border-foreground/10 py-6 text-[0.65rem] uppercase tracking-[0.3em] text-foreground/60 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <img src={profileLogo} alt="Luiz Felippe" className="h-10 w-10 rounded-full border border-foreground/10 object-cover" />
          <span className="footer-signature">{t('common.footer.signature')}</span>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:justify-end">
          <a
            href="https://github.com/luizfelippeandrade"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/70 shadow-sm transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://www.instagram.com/luizfelippe.e"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/70 shadow-sm transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            <FiInstagram /> Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/70 shadow-sm transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            <FiLinkedin /> LinkedIn
          </a>
          <Link
            to="/maintenance"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/70 shadow-sm transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            Patch Notes
          </Link>
          <Link
            to="/faq"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/70 shadow-sm transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            {t('common.footer.links.faq')}
          </Link>
          <Link
            to="/terms"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/70 shadow-sm transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            {t('common.footer.links.terms')}
          </Link>
          <Link
            to="/privacy"
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/70 shadow-sm transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            {t('common.footer.links.privacy')}
          </Link>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/70 shadow-sm transition hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            <FiChevronUp /> {t('common.close')}
          </button>
        </div>

        <p className="footer-signature text-center md:text-right">© {year} · {t('common.footer.rights')}</p>
      </div>
    </footer>
  );
};
