const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variable}) / ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
        '4k': '2300px'
      },
      colors: {
        background: withOpacityValue('--color-background'),
        foreground: withOpacityValue('--color-foreground'),
        accent: withOpacityValue('--color-accent'),
        secondary: withOpacityValue('--color-secondary'),
        muted: 'var(--text-muted)'
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        inter: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Sora"', '"Space Grotesk"', '"Orbitron"', 'sans-serif'],
        orbitron: ['"Sora"', '"Space Grotesk"', '"Orbitron"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', 'SFMono-Regular', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        glow: 'var(--shadow-glow)'
      }
    }
  },
  plugins: []
};
