import { Routes, Route } from "react-router";

import RouterPath from "./Router";

import Dashboard from "../Template/Dashboard";
import HomePage from "../pages/HompePage/HomePage";
import OURSELVE from "../pages/Ourselve/Ourselve";
import GroupElectroic from "../pages/GroupElectronic/GroupElectroic";
import BoardElectronic from "../pages/BoardEletronic/BoardElectronic";
import FotovoltaicBoard from "../pages/FotovoltaicBoard/FotovoltaicBoard";
import ElectroMovil from "../pages/ElectroMovil/ElectroMovil";

const Home = () => <HomePage />;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RouterPath.MAIN} element={<Dashboard><Home /></Dashboard>} />
      <Route path={RouterPath.SERVICES.OURSELVES} element={<Dashboard><OURSELVE /></Dashboard>} />
      <Route path={RouterPath.SERVICES.GROUP_ELECTRONICS} element={<Dashboard><GroupElectroic /></Dashboard>} />
      <Route path={RouterPath.SERVICES.BOARD_ELECTRONICS} element={<Dashboard><BoardElectronic /></Dashboard>} />
      <Route path={RouterPath.SERVICES.FOTOVOLTAIC_BOARD} element={<Dashboard><FotovoltaicBoard /></Dashboard>} />
      <Route path={RouterPath.SERVICES.ELECTRO_MOVIL} element={<Dashboard><ElectroMovil /></Dashboard>} />
    </Routes>
  );
};

export default AppRoutes;