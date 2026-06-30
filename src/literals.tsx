import i18next from 'i18next';

import translationES from '../public/locales/es.json';
import translationEN from '../public/locales/en.json';

i18next.init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    es: { translation: translationES },
    en: { translation: translationEN }
  }
});

export default i18next;