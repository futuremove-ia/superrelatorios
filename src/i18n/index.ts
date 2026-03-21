import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import locales
import ptBR from '../locales/pt-BR.json';
import enUS from '../locales/en-US.json';
import esES from '../locales/es-ES.json';
import ptBRStrategy from '../locales/pt-BR-strategy.json';
import enUSStrategy from '../locales/en-US-strategy.json';
import esESStrategy from '../locales/es-ES-strategy.json';

const resources = {
  'pt-BR': { 
    translation: { 
      ...ptBR, 
      ...ptBRStrategy 
    } 
  },
  'en-US': { 
    translation: { 
      ...enUS, 
      ...enUSStrategy 
    } 
  },
  'es-ES': { 
    translation: { 
      ...esES, 
      ...esESStrategy 
    } 
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'pt-BR',
    supportedLngs: ['pt-BR', 'en-US', 'es-ES'],
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
