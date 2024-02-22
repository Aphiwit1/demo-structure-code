import { Navigate, useRoutes } from "react-router-dom";

import { AuthenticationRoutes } from "./features/authentication/AuthenticationRoutes";
import { AuthenticationRoutesPath } from "./config/Router";
import { DashboardRoutes } from "./features/Dashboard/DashboardRoutes";

const Routes = () =>
  useRoutes([
    {
      path: "",
      element: (
        <Navigate to={AuthenticationRoutesPath.login.absolutePath} replace />
      ),
    },
    AuthenticationRoutes,
    DashboardRoutes,
    {
      path: "*",
      element: <div>Page not found</div>,
    },
  ]);

export default Routes;
