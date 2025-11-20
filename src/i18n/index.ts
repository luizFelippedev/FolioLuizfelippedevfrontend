import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locales/pt';
import en from './locales/en';
import es from './locales/es';
import fr from './locales/fr';
import de from './locales/de';
import it from './locales/it';
import ja from './locales/ja';
import zh from './locales/zh';

const resources = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  ja: { translation: ja },
  zh: { translation: zh }
};

const SUPPORTED = Object.keys(resources);
const STORAGE_KEY = 'portfolio-language';
const storedLng = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
const browserLng = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : null;
const initialLng = (storedLng && SUPPORTED.includes(storedLng) && storedLng) || (browserLng && SUPPORTED.includes(browserLng) && browserLng) || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLng,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
