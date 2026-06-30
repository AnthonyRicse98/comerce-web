const DEFAULT_ROUTES = "/comerce-web/";
const SERVICES_ROUTES = `${DEFAULT_ROUTES}services/`

const RouterPath = {
    MAIN: DEFAULT_ROUTES,
    SERVICES: {
        OURSELVES: `${SERVICES_ROUTES}ourselves/`,
        GROUP_ELECTRONICS: `${SERVICES_ROUTES}group-electronics/`,
        BOARD_ELECTRONICS: `${SERVICES_ROUTES}board-electronics/`,
        FOTOVOLTAIC_BOARD: `${SERVICES_ROUTES}fotovoltaic-board/`,
        ELECTRO_MOVIL: `${SERVICES_ROUTES}electro-movil/`,
    }
}

export default RouterPath;