import AppLayout from '@components/AppLayout/AppLayout'
import AuthenticationLayout from '@components/AppLayout/components/AuthenticationLayout'
import {
  AuthenticationRoutesPath,
  authenticationPath,
  SelectFactoryRoutesPath,
  selectFactoryPath,
} from '@config/Router'
import SelectFactoryPage from '@features/SelectionFactory/pages/SelectFactoryPage/SelectFactoryPage'

import { Outlet } from 'react-router-dom'

export const SelectionFactoryRoutes = {
  path: selectFactoryPath,
  element: (
    <AppLayout>
      <SelectFactoryPage />
    </AppLayout>
  ),
}
