import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'portfolio-language';

export interface LanguageOption {
  code: string;
  label: string;
  native: string;
  countryCode: string;
  beta?: boolean;
}

export const languageOptions: LanguageOption[] = [
  { code: 'pt', label: 'Português', native: 'PT-BR', countryCode: 'BR' },
  { code: 'en', label: 'English', native: 'EN-US', countryCode: 'US' },
  { code: 'es', label: 'Español', native: 'ES', countryCode: 'ES' },
  { code: 'fr', label: 'Français', native: 'FR', countryCode: 'FR' },
  { code: 'de', label: 'Deutsch', native: 'DE', countryCode: 'DE' },
  { code: 'it', label: 'Italiano', native: 'IT', countryCode: 'IT' },
  { code: 'ja', label: '日本語', native: 'JP', countryCode: 'JP' },
  { code: 'zh', label: '中文', native: 'CN', countryCode: 'CN' }
];

const selectableLanguageCodes = languageOptions.filter((option) => !option.beta).map((option) => option.code);
const fallbackLanguageOption = languageOptions.find((option) => !option.beta) ?? languageOptions[0];

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && selectableLanguageCodes.includes(stored) && stored !== i18n.language) {
      void i18n.changeLanguage(stored);
    }
  }, [i18n]);

  const setLanguage = (code: string) => {
    if (!selectableLanguageCodes.includes(code)) return;
    void i18n.changeLanguage(code);
    localStorage.setItem(STORAGE_KEY, code);
  };

  const current =
    languageOptions.find((option) => option.code === i18n.language && !option.beta) ?? fallbackLanguageOption;

  return {
    language: current.code,
    current,
    options: languageOptions,
    setLanguage
  };
};
