const DEFAULT_ROUTES = "/comerce-web/";
const SERVICES_ROUTES = `${DEFAULT_ROUTES}services/`

const RouterPath = {
    MAIN: DEFAULT_ROUTES,
    SERVICES: {
        ELECTRICITY: `${SERVICES_ROUTES}electricity/`,
    }
}

export default RouterPath;