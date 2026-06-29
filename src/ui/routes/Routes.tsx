import { Routes, Route } from "react-router";

import RouterPath from "./Router";
import Dashboard from "../Template/Dashboard";
import HomePage from "../pages/HomePage";

const Home = () => <HomePage />;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RouterPath.MAIN} element={<Dashboard><Home /></Dashboard>} />
    </Routes>
  );
};

export default AppRoutes;