import { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { useUIStore } from '@store/uiStore';
import logo from '@assets/logo.jpg';
import { SettingsMenu } from '@components/common/SettingsMenu';

const navItems = [
  { labelKey: 'common.nav.home', path: '/' },
  { labelKey: 'common.nav.projects', path: '/projects' },
  { labelKey: 'common.nav.certificates', path: '/certificates' },
  { labelKey: 'common.nav.blog', path: '/blog' },
  { labelKey: 'common.nav.contact', path: '/contact' }
];

export const Header = () => {
  const { t } = useTranslation();
  const { isMenuOpen, toggleMenu, closeMenu } = useUIStore();

  const navLinks = useMemo(
    () =>
      navItems.map((item) => (
        <NavLink key={item.path} to={item.path} onClick={closeMenu} className="relative block" end={item.path === '/'}>
          {({ isActive }) => (
            <span
              className={clsx(
                'relative inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.32em] transition',
                isActive ? 'text-background' : 'text-foreground/70 hover:text-foreground'
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="header-nav-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/80 via-accent/70 to-secondary"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              ) : (
                <span className="absolute inset-0 rounded-full border border-foreground/5" />
              )}
              <span className="relative">{t(item.labelKey)}</span>
            </span>
          )}
        </NavLink>
      )),
    [closeMenu, t]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-foreground/10 bg-background/85 px-4 py-2 shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-5 lg:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt={t('common.logoAlt')}
            className="h-9 w-9 rounded-full border border-foreground/15 object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.4em] text-foreground/50">Luiz Felippe</p>
            <p className="text-sm font-display text-foreground">Portfolio OS</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 md:flex">{navLinks}</nav>

        <div className="flex items-center gap-3">
          <SettingsMenu />
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-full border border-foreground/15 bg-foreground/5 px-3 py-2 text-[0.65rem] uppercase tracking-[0.35em]"
            aria-label={isMenuOpen ? t('common.close') : t('common.menu')}
          >
            {isMenuOpen ? t('common.close') : t('common.menu')}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="mx-4 mt-3 rounded-2xl border border-foreground/10 bg-background/95 p-4 text-sm shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:hidden"
        >
          <div className="flex flex-col space-y-3">{navLinks}</div>
        </motion.div>
      )}
    </header>
  );
};
