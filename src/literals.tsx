import i18next from 'i18next';

i18next.init({
  lng: 'es',
  resources: {
    es: {
      translation: {
        'COMERCEWEB-DASHBOARD-TEMPLATE-TITLE': 'Bienvenido al Dashboard'
      }
    },
    en: {
      translation: {
        'COMERCEWEB-DASHBOARD-TEMPLATE-TITLE': 'Welcome to the Dashboard'
      }
    }
  }
});

export default i18next;