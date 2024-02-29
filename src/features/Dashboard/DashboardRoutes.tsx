import { DashboardRoutesPath, dashboardPath } from '../../config/Router'

import Dashboard from './pages/Dashboard'
import AppLayout from '../../components/AppLayout/AppLayout'
import { Outlet } from 'react-router-dom'
import RemainingLifeSetting from '@features/Dashboard/components/RemainingLifeSetting/RemainingLifeSetting'

export const DashboardRoutes = {
  path: dashboardPath,
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  children: [
    {
      path: '',
      element: <Dashboard />,
    },
    {
      path: 'xx',
      element: <RemainingLifeSetting />,
    },
  ],
}
