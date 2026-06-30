import i18next from 'i18next';

i18next.init({
  lng: 'es',
  resources: {
    es: {
      translation: {
        'COMERCEWEB-DASHBOARD-LOGO': 'LOGO',
        'COMERCEWEB-DASHBOARD-SOCIAL-MEDIA': 'Redes Sociales',
        'COMERCEWEB-DASHBOARD-FOOTER': 'Footer',
        'COMERCEWEB-DASHBOARD-TEMPLATE-TITLE': 'Bienvenido al Dashboard',
        'COMERCEWEB-OURSELVE-PAGE-TITLE': 'Bienvenido a la página de Nosotros',
        'COMERCEWEB-GROUP-ELECTRONICS-PAGE-TITLE': 'Bienvenido a la página de Grupos Electrónicos',
        'COMERCEWEB-BOARD-ELECTRONIC-PAGE-TITLE': 'Bienvenido a la página de Tableros Electrónicos',
        'COMERCEWEB-FOTOVOLTAIC-BOARD-PAGE-TITLE': 'Bienvenido a la página de Tableros Fotovoltaicos',
        'COMERCEWEB-ELECTRO-MOVIL-PAGE-TITLE': 'Bienvenido a la página de Vehículos Eléctricos'
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