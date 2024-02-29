import { Navigate, useRoutes } from 'react-router-dom'

import { AuthenticationRoutes } from './features/authentication/AuthenticationRoutes'
import { AuthenticationRoutesPath } from './config/Router'
import { DashboardRoutes } from './features/Dashboard/DashboardRoutes'
import { SelectionFactoryRoutes } from '@features/SelectFactory/SelectFactoryRoutes'
import { SelectUnitRoutes } from '@features/SelectUnit/SelectUnitRoutes'

const Routes = () =>
  useRoutes([
    {
      path: '',
      element: (
        <Navigate to={AuthenticationRoutesPath.login.absolutePath} replace />
      ),
    },
    AuthenticationRoutes,
    SelectionFactoryRoutes,
    DashboardRoutes,
    SelectUnitRoutes,
    {
      path: '*',
      element: <div>Page not found</div>,
    },
  ])

export default Routes
