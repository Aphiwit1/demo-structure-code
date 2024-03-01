import { Navigate, useRoutes } from 'react-router-dom'

import { AuthenticationRoutes } from './features/authentication/AuthenticationRoutes'
import { AuthenticationRoutesPath } from './config/Router'
import { DashboardRoutes } from './features/Dashboard/DashboardRoutes'

import { SelectUnitRoutes } from '@features/SelectUnit/SelectUnitRoutes'
import { SelectCompanyRoutes } from '@features/SelectCompany/SelectCompanyRoutes'

const Routes = () =>
  useRoutes([
    {
      path: '',
      element: (
        <Navigate to={AuthenticationRoutesPath.login.absolutePath} replace />
      ),
    },
    AuthenticationRoutes,
    SelectCompanyRoutes,
    DashboardRoutes,
    SelectUnitRoutes,
    {
      path: '*',
      element: <div>Page not found</div>,
    },
  ])

export default Routes
