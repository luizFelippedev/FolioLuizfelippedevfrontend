import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

import ReactCountryFlag from 'react-country-flag';

import { useLanguage } from '@hooks/useLanguage';

export const LanguageSelector = () => {
  const { language, setLanguage, options, current } = useLanguage();
  const selectableOptions = options.filter((option) => !option.beta);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const close = () => setIsOpen(false);
    if (!isOpen) return;
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [isOpen]);

  return (
    <div className="relative flex items-center">
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className="flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-xs uppercase tracking-[0.3em]"
      >
        <ReactCountryFlag
          svg
          countryCode={current.countryCode}
          className="text-lg"
          style={{ borderRadius: '999px' }}
        />
        {current.native}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-50 mt-3 w-56 space-y-2 rounded-3xl border border-foreground/15 bg-background/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {selectableOptions.map((option) => (
              <li key={option.code}>
                <button
                  className={clsx(
                    'flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left text-xs uppercase tracking-[0.3em] transition',
                    option.code === language
                      ? 'bg-foreground/10 text-foreground shadow-[0_8px_20px_rgba(0,0,0,0.25)]'
                      : 'text-muted hover:bg-foreground/5'
                  )}
                  onClick={() => {
                    setLanguage(option.code);
                    setIsOpen(false);
                  }}
                >
                  <ReactCountryFlag
                    svg
                    countryCode={option.countryCode}
                    className="text-lg"
                    style={{ borderRadius: '999px' }}
                  />
                  <div>
                    <p>{option.label}</p>
                    <p className="text-[0.6rem] tracking-wide text-foreground/70">{option.native}</p>
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
