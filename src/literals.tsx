import i18next from 'i18next';
import dashboardNavigation from '../locales/es/locales.json';

const todosLosArchivosJson = import.meta.glob('../locales/es/services/*.json', { eager: true });

const serviciosAgrupados: Record<string, any> = {};

Object.entries(todosLosArchivosJson).forEach(([ruta, contenido]) => {
  const nombreArchivo = ruta.split('/').pop()?.replace('.json', '').trim() || '';
  const datosExtraidos = contenido && (contenido as any).default ? (contenido as any).default : contenido;
  
  if (nombreArchivo) {
    serviciosAgrupados[nombreArchivo] = datosExtraidos;
  }
});

// CORRECCIÓN: Casteamos el JSON base a 'any' para evitar que TypeScript bloquee el compilador si cambias sus llaves en el CMS
const baseTranslation = (dashboardNavigation as any).dashboard 
  ? (dashboardNavigation as any).dashboard 
  : dashboardNavigation;

i18next.init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    es: {
      translation: {
        ...baseTranslation,
        services: serviciosAgrupados 
      }
    }
  }
});

export default i18next;