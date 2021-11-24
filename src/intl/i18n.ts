import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '../../assets/i18n/en.json';
import translationFR from '../../assets/i18n/fr.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
