import { useCallback, useEffect, useMemo, useState } from 'react';

import { defaultTheme, themeMap, themeNames, type ThemeName } from '../styles/themes';

const STORAGE_KEY = 'futuristic-theme';

const applyThemeTokens = (themeName: ThemeName) => {
  const root = document.documentElement;
  const tokens = themeMap[themeName];

  root.dataset.theme = themeName;
  root.style.setProperty('--color-background', tokens.colors.background);
  root.style.setProperty('--color-foreground', tokens.colors.foreground);
  root.style.setProperty('--color-accent', tokens.colors.accent);
  root.style.setProperty('--color-secondary', tokens.colors.secondary);
  root.style.setProperty('--surface-color', tokens.colors.surface);
  root.style.setProperty('--surface-border', tokens.colors.border);
  root.style.setProperty('--text-muted', tokens.colors.muted);
  root.style.setProperty('--shadow-glow', tokens.colors.glow);
  root.style.setProperty('--gradient-from', tokens.gradient[0]);
  root.style.setProperty('--gradient-via', tokens.gradient[1]);
  root.style.setProperty('--gradient-to', tokens.gradient[2]);
};

const getStoredTheme = (): ThemeName => {
  if (typeof window === 'undefined') {
    return defaultTheme;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && themeNames.includes(stored as ThemeName)) {
    return stored as ThemeName;
  }
  return defaultTheme;
};

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeName>(() => getStoredTheme());

  useEffect(() => {
    applyThemeTokens(theme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  const setThemeName = useCallback((name: ThemeName) => {
    setTheme(name);
  }, []);

  const cycleTheme = useCallback(() => {
    const currentIndex = themeNames.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeNames.length;
    setTheme(themeNames[nextIndex]);
  }, [theme]);

  const availableThemes = useMemo(() => themeNames.map((name) => themeMap[name]), []);

  return { theme, setTheme: setThemeName, cycleTheme, themes: availableThemes };
};
