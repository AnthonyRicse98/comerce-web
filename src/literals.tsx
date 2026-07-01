import i18next from 'i18next';

import navigation from '../locales/navigation.json';

i18next.init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    navigation: { translation: navigation },
  }
});

export default i18next;