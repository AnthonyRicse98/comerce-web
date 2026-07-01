import i18next from 'i18next';

import translationES from '../locales/es.json';
import translationEN from '../locales/en.json';

i18next.init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    es: { translation: translationES },
    en: { translation: translationEN }
  }
});

export default i18next;