import AuthenticationLayout from '@components/AppLayout/components/AuthenticationLayout'
import { DashboardRoutesPath, selectUnitPath } from '@config/Router'
import RemainingLifeSetting from '@features/Dashboard/components/RemainingLifeSetting/RemainingLifeSetting'
import SelectUnitPage from '@features/SelectUnit/pages/SelectUnitPage/SelectUnitPage'

export const SelectUnitRoutes = {
  path: selectUnitPath,
  element: (
    <AuthenticationLayout>
      <SelectUnitPage />
    </AuthenticationLayout>
  ),
}
