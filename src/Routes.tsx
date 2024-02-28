import { Navigate, useRoutes } from "react-router-dom";

import { AuthenticationRoutes } from "./features/authentication/AuthenticationRoutes";
import { AuthenticationRoutesPath } from "./config/Router";
import { DashboardRoutes } from "./features/Dashboard/DashboardRoutes";
import { SelectionFactoryRoutes } from "@features/SelectionFactory/SelectionFactoryRoutes";

const Routes = () =>
  useRoutes([
    {
      path: "",
      element: (
        <Navigate to={AuthenticationRoutesPath.login.absolutePath} replace />
      ),
    },
    AuthenticationRoutes,
    SelectionFactoryRoutes,
    DashboardRoutes,
    {
      path: "*",
      element: <div>Page not found</div>,
    },
  ]);

export default Routes;
