import literals from '@/literals';

const DEFAULT_ROUTES = "/comerce-web/";
const SERVICES_ROUTES = `${DEFAULT_ROUTES}services/`


const RouterPath = {
    MAIN: DEFAULT_ROUTES,
    SERVICES: {
        OURSELVES: `${SERVICES_ROUTES}${literals.t('services.ourselves.route')}/`,
        GROUP_ELECTRONICS: `${SERVICES_ROUTES}${literals.t('services.genset.route')}/`,
        BOARD_ELECTRONICS: `${SERVICES_ROUTES}${literals.t('services.three.route')}/`,
        FOTOVOLTAIC_BOARD: `${SERVICES_ROUTES}${literals.t('services.four.route')}/`,
        ELECTRO_MOVIL: `${SERVICES_ROUTES}${literals.t('services.five.route')}/`,
    }
}

export default RouterPath;