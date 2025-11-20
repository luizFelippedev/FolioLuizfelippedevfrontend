export type ThemeName =
  | 'dark'
  | 'light'
  | 'cyberpunk'
  | 'neon'
  | 'ocean'
  | 'forest'
  | 'sunset'
  | 'minimal';

export interface ThemeDefinition {
  name: ThemeName;
  label: string;
  description: string;
  gradient: [string, string, string];
  colors: {
    background: string;
    foreground: string;
    accent: string;
    secondary: string;
    surface: string;
    border: string;
    muted: string;
    glow: string;
  };
}

export const themeOptions: ThemeDefinition[] = [
  {
    name: 'minimal',
    label: 'Monolight',
    description: 'Pretos suaves e cinzas luminosos para dashboards de luxo.',
    gradient: ['#0f172a', '#475569', '#94a3b8'],
    colors: {
      background: '4 4 4',
      foreground: '245 245 245',
      accent: '71 85 105',
      secondary: '148 163 184',
      surface: 'rgba(255, 255, 255, 0.02)',
      border: 'rgba(255, 255, 255, 0.08)',
      muted: 'rgba(245, 245, 245, 0.65)',
      glow: '0 0 25px rgba(148, 163, 184, 0.25)'
    }
  },
  {
    name: 'light',
    label: 'Luminous',
    description: 'Layout clean com luz difusa.',
    gradient: ['#4338ca', '#14b8a6', '#f97316'],
    colors: {
      background: '245 247 255',
      foreground: '17 24 39',
      accent: '67 56 202',
      secondary: '20 184 166',
      surface: 'rgba(17, 24, 39, 0.02)',
      border: 'rgba(17, 24, 39, 0.08)',
      muted: 'rgba(17, 24, 39, 0.6)',
      glow: '0 0 30px rgba(79, 70, 229, 0.25)'
    }
  },
  {
    name: 'dark',
    label: 'Dark Matter',
    description: 'Base futurista com contraste profundo.',
    gradient: ['#7f5af0', '#2cb67d', '#0ea5e9'],
    colors: {
      background: '5 5 15',
      foreground: '241 245 249',
      accent: '127 90 240',
      secondary: '44 182 125',
      surface: 'rgba(255, 255, 255, 0.04)',
      border: 'rgba(255, 255, 255, 0.12)',
      muted: 'rgba(241, 245, 249, 0.65)',
      glow: '0 0 30px rgba(127, 90, 240, 0.45)'
    }
  },
  {
    name: 'cyberpunk',
    label: 'Cyberpunk',
    description: 'Magenta neon e contrastes agressivos.',
    gradient: ['#ff2e63', '#08d9d6', '#c724b1'],
    colors: {
      background: '8 0 20',
      foreground: '245 240 255',
      accent: '255 46 99',
      secondary: '8 217 214',
      surface: 'rgba(255, 255, 255, 0.05)',
      border: 'rgba(255, 46, 99, 0.35)',
      muted: 'rgba(245, 240, 255, 0.7)',
      glow: '0 0 35px rgba(255, 46, 99, 0.45)'
    }
  },
  {
    name: 'neon',
    label: 'Neon Pulse',
    description: 'Energia club futurista.',
    gradient: ['#00f5ff', '#ff00f5', '#ffa41b'],
    colors: {
      background: '4 0 25',
      foreground: '238 255 251',
      accent: '0 245 255',
      secondary: '255 0 245',
      surface: 'rgba(0, 245, 255, 0.05)',
      border: 'rgba(0, 245, 255, 0.2)',
      muted: 'rgba(238, 255, 251, 0.7)',
      glow: '0 0 45px rgba(0, 245, 255, 0.35)'
    }
  },
  {
    name: 'ocean',
    label: 'Abyss',
    description: 'Azuis profundos com verdes luminescentes.',
    gradient: ['#0ea5e9', '#22d3ee', '#4ade80'],
    colors: {
      background: '3 21 43',
      foreground: '232 250 255',
      accent: '14 165 233',
      secondary: '34 211 238',
      surface: 'rgba(14, 165, 233, 0.07)',
      border: 'rgba(34, 211, 238, 0.2)',
      muted: 'rgba(232, 250, 255, 0.7)',
      glow: '0 0 35px rgba(14, 165, 233, 0.35)'
    }
  },
  {
    name: 'forest',
    label: 'Nebula Forest',
    description: 'Deep greens warmed by golden highlights.',
    gradient: ['#16a34a', '#22c55e', '#facc15'],
    colors: {
      background: '5 24 12',
      foreground: '236 250 237',
      accent: '22 163 74',
      secondary: '250 204 21',
      surface: 'rgba(34, 197, 94, 0.08)',
      border: 'rgba(34, 197, 94, 0.18)',
      muted: 'rgba(236, 250, 237, 0.7)',
      glow: '0 0 30px rgba(34, 197, 94, 0.35)'
    }
  },
  {
    name: 'sunset',
    label: 'Aurora',
    description: 'Cinematic oranges blended with vibrant violets.',
    gradient: ['#f97316', '#fb7185', '#a855f7'],
    colors: {
      background: '21 10 33',
      foreground: '255 244 234',
      accent: '249 115 22',
      secondary: '250 113 133',
      surface: 'rgba(249, 115, 22, 0.06)',
      border: 'rgba(250, 250, 255, 0.15)',
      muted: 'rgba(255, 244, 234, 0.72)',
      glow: '0 0 35px rgba(250, 113, 133, 0.35)'
    }
  }
];

export const themeMap = themeOptions.reduce<Record<ThemeName, ThemeDefinition>>((acc, theme) => {
  acc[theme.name] = theme;
  return acc;
}, {} as Record<ThemeName, ThemeDefinition>);

export const themeNames = themeOptions.map((theme) => theme.name);

export const defaultTheme: ThemeName = 'minimal';
