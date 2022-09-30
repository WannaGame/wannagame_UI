import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//Importing all translations
import translationEnglish from './English/translation.json';
import translationFrench from './French/translation.json';

export const resources = {
  en: {
    translation: translationEnglish,
  },
  fr: {
    translation: translationFrench,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
});
