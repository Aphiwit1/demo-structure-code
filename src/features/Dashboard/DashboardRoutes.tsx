import { dashboardPath } from "../../config/Router";

import Dashboard from "./pages/Dashboard";
import AppLayout from "../../components/AppLayout/AppLayout";

export const DashboardRoutes = {
  path: dashboardPath,
  element: (
    <AppLayout>
      <Dashboard />
    </AppLayout>
  ),
};
