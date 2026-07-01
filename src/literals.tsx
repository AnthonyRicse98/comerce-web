import i18next from 'i18next';
import dashboardNavigation from '../locales/es/locales.json';

// CORRECCIÓN: Al estar 'locales' fuera de 'src', subimos un nivel con '../'
const todosLosArchivosJson = import.meta.glob('../locales/es/services/*.json', { eager: true });

const serviciosAgrupados: Record<string, any> = {};

Object.entries(todosLosArchivosJson).forEach(([ruta, contenido]) => {
  // Limpiamos el nombre del archivo de forma segura
  const nombreArchivo = ruta.split('/').pop()?.replace('.json', '').trim() || '';
  const datosExtraidos = contenido && (contenido as any).default ? (contenido as any).default : contenido;
  
  if (nombreArchivo) {
    serviciosAgrupados[nombreArchivo] = datosExtraidos;
  }
});


const baseTranslation = dashboardNavigation.dashboard ? (dashboardNavigation as any).dashboard : dashboardNavigation;

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