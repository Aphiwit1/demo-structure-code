import AuthenticationLayout from '@components/AppLayout/components/AuthenticationLayout'
import { selectFactoryPath } from '@config/Router'
import SelectFactoryPage from '@features/SelectFactory/pages/SelectFactoryPage/SelectFactoryPage'

export const SelectionFactoryRoutes = {
  path: selectFactoryPath,
  element: (
    <AuthenticationLayout>
      <SelectFactoryPage />
    </AuthenticationLayout>
  ),
}
