import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

import { useTheme } from '@hooks/useTheme';
import { themeOptions, type ThemeName } from '../../styles/themes';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const activeTheme = themeOptions.find((option) => option.name === theme);
  const featuredThemes: ThemeName[] = ['minimal', 'light'];

  useEffect(() => {
    const close = () => setIsOpen(false);
    if (!isOpen) return;
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [isOpen]);

  const handleSelect = (name: ThemeName) => {
    setTheme(name);
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center gap-3">
      <div className="hidden items-center gap-1 rounded-full border border-foreground/10 bg-foreground/5 px-2 py-1 lg:flex">
        {featuredThemes.map((name) => {
          const option = themeOptions.find((themeOption) => themeOption.name === name);
          if (!option) return null;
          return (
            <button
              key={name}
              onClick={(event) => {
                event.stopPropagation();
                handleSelect(name);
              }}
              className={clsx(
                'flex items-center gap-2 rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-[0.35em] transition',
                theme === name ? 'bg-foreground/15 text-foreground' : 'text-foreground/60 hover:text-foreground'
              )}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: option.gradient[0] }} />
              {option.label}
            </button>
          );
        })}
      </div>
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen((value) => !value);
        }}
        className="flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-xs uppercase tracking-[0.25em]"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="h-3 w-3 rounded-full" style={{ background: activeTheme?.gradient[0] }} />
        Temas
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-50 mt-3 w-[16.5rem] space-y-2 rounded-3xl border border-foreground/15 bg-background/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {themeOptions.map((option) => (
              <li key={option.name}>
                <button
                  className={clsx(
                    'flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-xs uppercase tracking-[0.2em] transition',
                    option.name === theme
                      ? 'bg-foreground/10 text-foreground shadow-[0_8px_20px_rgba(0,0,0,0.25)]'
                      : 'text-muted hover:bg-foreground/5'
                  )}
                  onClick={() => handleSelect(option.name)}
                >
                  <div className="relative">
                    <span
                      className="block h-12 w-12 rounded-[1rem] border border-white/20 shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
                      style={{
                        background: `linear-gradient(135deg, ${option.gradient[0]}, ${option.gradient[1]}, ${option.gradient[2]})`
                      }}
                    />
                    {option.name === theme ? (
                      <span className="absolute inset-0 rounded-[1rem] border border-white/40 opacity-60" />
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <p className="tracking-[0.35em]">{option.label}</p>
                    <p
                      className="text-[0.65rem] normal-case tracking-wide text-foreground/70"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {option.description}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
