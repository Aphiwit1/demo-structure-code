import AuthenticationLayout from '@components/AppLayout/components/AuthenticationLayout'
import { selectCompanyPath } from '@config/Router'

import SelectCompanyPage from '@features/SelectCompany/pages/SelectCompanyPage/SelectCompanyPage'

export const SelectCompanyRoutes = {
  path: selectCompanyPath,
  element: (
    <AuthenticationLayout>
      <SelectCompanyPage />
    </AuthenticationLayout>
  ),
}
