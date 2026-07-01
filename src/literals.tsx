import i18next from 'i18next';

import translationES from '../locales/es.json';

i18next.init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    es: { translation: translationES },
  }
});

export default i18next;