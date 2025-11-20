import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import type { IconType } from 'react-icons';
import { FiActivity, FiDroplet, FiFeather, FiMoon, FiSettings, FiStar, FiSun, FiZap } from 'react-icons/fi';
import { LuTrees } from 'react-icons/lu';
import { PiGlobeHemisphereWestBold } from 'react-icons/pi';
import ReactCountryFlag from 'react-country-flag';

import { useLanguage } from '@hooks/useLanguage';
import { useTheme } from '@hooks/useTheme';
import type { ThemeName } from '@styles/themes';
import { usePreferencesStore } from '@store/preferencesStore';
import { useLabs } from '@hooks/useLabs';
import { fallbackLabVisual, resolveLabIcon } from '@constants/labs';

const ThemeSwatch = ({
  gradient,
  active,
  icon: Icon
}: {
  gradient: [string, string, string];
  active: boolean;
  icon: IconType;
}) => (
  <span
    className={clsx(
      'relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all',
      active ? 'border-secondary/70 shadow-[0_12px_30px_rgba(0,0,0,0.35)]' : 'border-white/5 opacity-90'
    )}
  >
    <span
      className="absolute inset-0 rounded-2xl bg-black/30 blur-xl"
      style={{ opacity: active ? 0.5 : 0.2 }}
    />
    <span
      className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/15"
      style={{ background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]}, ${gradient[2]})` }}
    >
      <span className="absolute inset-0 rounded-xl border border-white/20" />
      <Icon className="relative text-lg text-white drop-shadow-md" />
    </span>
  </span>
);

const SectionLabel = ({ children }: { children: string }) => (
  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-foreground/50">{children}</p>
);

const themeIconMap: Record<ThemeName, IconType> = {
  minimal: FiFeather,
  light: FiSun,
  dark: FiMoon,
  cyberpunk: FiZap,
  neon: FiStar,
  ocean: FiDroplet,
  forest: LuTrees,
  sunset: FiActivity
};

export const SettingsMenu = () => {
  const { t } = useTranslation();
  const { language, options, setLanguage } = useLanguage();
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'languages' | 'themes' | 'labs'>('languages');
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const translationLabs =
    (t('settings.labsItems', { returnObjects: true }) as
      | Record<string, { title: string; description: string; status?: string }>) ?? {};
  const { labs: labState, toggleLab } = usePreferencesStore();
  const { data: labsResponse } = useLabs();
  const labsFromApi = labsResponse?.data ?? [];

  const fallbackLabs = useMemo(
    () =>
      Object.entries(translationLabs).map(([slug, lab]) => ({
        _id: slug,
        slug,
        title: lab.title,
        description: lab.description,
        status: lab.status,
        gradient: undefined,
        icon: slug,
        active: true,
        beta: true
      })),
    [translationLabs]
  );

  const labsList = labsFromApi.length > 0 ? labsFromApi : fallbackLabs;

  useEffect(() => {
    if (!isOpen) return;

    const handlePointer = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <motion.button
        whileTap={{ scale: 0.96 }}
        ref={triggerRef}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        aria-expanded={isOpen}
        aria-controls="settings-panel"
        className="flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-xs uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
      >
        <FiSettings />
        <span className="hidden sm:inline">{t('settings.label')}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            id="settings-panel"
            role="dialog"
            aria-label={t('settings.title')}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full z-50 mt-3 max-h-[80vh] w-[22rem] space-y-4 overflow-y-auto rounded-3xl border border-foreground/10 bg-background/95 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <header className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-r from-background via-background/70 to-background/40 p-3">
              <div className="pointer-events-none absolute inset-0 blur-2xl bg-[radial-gradient(circle_at_20%_0%,rgba(0,232,255,0.2),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(204,95,255,0.2),transparent_35%)]" />
              <div className="relative space-y-1">
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-foreground/50">{t('settings.title')}</p>
                <p className="text-xs text-foreground/60">{t('settings.subtitle')}</p>
              </div>
              <div className="relative mt-3 grid grid-cols-3 gap-2">
                {([
                  { key: 'languages', label: t('settings.language') },
                  { key: 'themes', label: t('settings.theme') },
                  { key: 'labs', label: t('settings.labsTitle') }
                ] as const).map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={clsx(
                      'rounded-xl border px-3 py-2 text-[0.7rem] uppercase tracking-[0.25em] transition',
                      activeTab === tab.key
                        ? 'border-secondary/70 bg-secondary/10 text-foreground shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
                        : 'border-foreground/10 bg-foreground/5 text-foreground/60 hover:border-foreground/20 hover:text-foreground'
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </header>

            <div className="space-y-4">
              {activeTab === 'languages' && (
                <section className="space-y-3">
                  <SectionLabel>{t('settings.language')}</SectionLabel>
                  <div className="grid gap-2">
                    {options
                      .filter((option) => !option.beta)
                      .map((option) => (
                        <button
                          key={option.code}
                          onClick={() => setLanguage(option.code)}
                          className={clsx(
                            'group relative flex min-h-[72px] items-center gap-3 overflow-hidden rounded-2xl border px-3 py-2 text-left text-xs uppercase tracking-[0.3em] transition shadow-[0_12px_26px_rgba(0,0,0,0.18)] backdrop-blur focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
                            option.code === language
                              ? 'border-secondary/70 bg-white/5 text-foreground'
                              : 'border-foreground/12 bg-background/75 text-foreground/70 hover:border-foreground/20 hover:bg-foreground/5'
                          )}
                        >
                          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/35 via-black/30 to-black/45" />
                          {option.code === language ? (
                            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-accent/10" />
                          ) : null}
                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/10">
                            <ReactCountryFlag
                              aria-label={option.label}
                              svg
                              countryCode={option.countryCode}
                              className="text-lg shadow-lg"
                              style={{ borderRadius: '999px', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.25))' }}
                            />
                          </span>
                          <div className="min-w-0">
                            <p>{option.native}</p>
                            <p className="text-[0.55rem] tracking-[0.35em] text-foreground/50 line-clamp-1">{option.label}</p>
                          </div>
                        </button>
                      ))}
                  </div>
                  {options.some((option) => option.beta) ? (
                    <div className="space-y-2 text-xs text-foreground/50">
                      <p className="uppercase tracking-[0.4em]">{t('settings.betaLanguages', 'Coming soon')}</p>
                      <div className="grid gap-2">
                        {options
                          .filter((option) => option.beta)
                          .map((option) => (
                            <div
                              key={option.code}
                              className="group relative flex min-h-[64px] items-center gap-3 overflow-hidden rounded-2xl border border-dashed border-secondary/30 px-3 py-2 backdrop-blur"
                            >
                              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/35" />
                              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary/40 bg-secondary/10">
                                <PiGlobeHemisphereWestBold className="text-lg text-secondary" aria-label={option.label} />
                              </span>
                              <div className="min-w-0">
                                <p>{option.native}</p>
                                <p className="text-[0.55rem] tracking-[0.35em] text-foreground/40 line-clamp-1">{option.label}</p>
                              </div>
                              <span className="text-[0.55rem] uppercase tracking-[0.3em] text-secondary">{t('settings.beta')}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  ) : null}
                </section>
              )}

              {activeTab === 'themes' && (
                <section className="space-y-3">
                  <SectionLabel>{t('settings.theme')}</SectionLabel>
                  <div className="space-y-2">
                    {themes.map((themeOption) => (
                      <button
                        key={themeOption.name}
                        onClick={() => setTheme(themeOption.name)}
                        className={clsx(
                          'group relative w-full overflow-hidden rounded-2xl border px-4 py-4 text-left text-[0.65rem] uppercase tracking-[0.25em] transition shadow-[0_14px_32px_rgba(0,0,0,0.2)] backdrop-blur',
                          themeOption.name === theme
                            ? 'border-secondary/70 bg-white/5 text-foreground'
                            : 'border-foreground/12 bg-background/75 text-foreground/80 hover:border-foreground/20 hover:bg-foreground/5'
                        )}
                        style={{
                          backgroundImage: `linear-gradient(120deg, ${themeOption.gradient[0]}, ${themeOption.gradient[1]}, ${themeOption.gradient[2]})`,
                          backgroundSize: '200% 200%'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/55" />
                        {themeOption.name === theme ? (
                          <span className="absolute inset-0 bg-gradient-to-r from-secondary/12 via-transparent to-accent/12" />
                        ) : null}
                        <div className="relative flex items-center gap-3">
                          <ThemeSwatch
                            icon={themeIconMap[themeOption.name as ThemeName] ?? FiStar}
                            gradient={themeOption.gradient}
                            active={themeOption.name === theme}
                          />
                          <div className="min-w-0">
                            <p className="text-base font-semibold tracking-[0.3em]">{themeOption.label}</p>
                            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/70 line-clamp-1">
                              {themeOption.description}
                            </p>
                          </div>
                          <div className="ml-auto flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-foreground/60">
                            <span
                              className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_0_4px_rgba(0,0,0,0.35)]"
                              style={{ background: `linear-gradient(135deg, ${themeOption.gradient[0]}, ${themeOption.gradient[2]})` }}
                            />
                            <span className="font-mono text-foreground/70">{themeOption.name}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'labs' && (
                <section className="space-y-3 text-sm text-foreground/70">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-secondary">
                    <p>{t('settings.labsTitle')}</p>
                    <span className="rounded-full border border-secondary/30 bg-secondary/10 px-2 py-1 text-[0.55rem] text-secondary/90">
                      Beta
                    </span>
                  </div>
                  <p className="text-foreground/80">{t('settings.labsDescription')}</p>
                  <ul className="space-y-2.5">
                    {labsList.map((lab) => {
                      const labKey = lab.slug ?? lab._id;
                      const isSubscribed = !!labState[labKey];
                      const gradient = lab.gradient ?? fallbackLabVisual.gradient;
                      const Icon = resolveLabIcon(lab.icon);
                      return (
                        <li
                          key={labKey}
                          className="relative overflow-hidden rounded-xl border border-foreground/12 bg-foreground/5 p-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.15)] backdrop-blur"
                        >
                          <div className="relative flex items-start gap-2.5">
                            <span
                              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 shadow-[0_8px_16px_rgba(0,0,0,0.14)]"
                              style={{ background: gradient }}
                            >
                              <Icon className="text-lg text-white drop-shadow" />
                            </span>
                            <div className="flex-1 space-y-1.5">
                              <div className="flex items-start justify-between gap-2">
                                <div className="space-y-1">
                                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-secondary">{lab.title}</p>
                                  <p className="text-xs text-foreground/70 leading-snug">{lab.description}</p>
                                </div>
                                <span className="rounded-full bg-secondary/12 px-2 py-[2px] text-[0.55rem] uppercase tracking-[0.26em] text-secondary/90">
                                  {lab.status ?? t('settings.beta')}
                                </span>
                              </div>
                              <div className="flex items-center justify-between gap-2.5">
                                <div className="flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.25em] text-foreground/55">
                                  <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_0_4px_rgba(0,0,0,0.25)]" />
                                  <span className="font-mono">{labKey}</span>
                                </div>
                                <button
                                  onClick={() => toggleLab(labKey)}
                                  className={clsx(
                                    'rounded-full border px-3 py-1 text-[0.6rem] uppercase tracking-[0.25em] transition shadow-[0_6px_12px_rgba(0,0,0,0.15)]',
                                    isSubscribed
                                      ? 'border-secondary bg-secondary/15 text-secondary'
                                      : 'border-secondary/30 bg-white/5 text-secondary hover:border-secondary/60'
                                  )}
                                >
                                  {isSubscribed ? t('settings.labsFollowing') : t('settings.labsNotify')}
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
