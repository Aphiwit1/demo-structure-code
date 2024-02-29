export const authenticationPath = 'auth'

export const AuthenticationRoutesPath = {
  login: {
    path: 'login',
    absolutePath: `/${authenticationPath}/login`,
  },
  register: {
    path: 'register',
    absolutePath: `/${authenticationPath}/register`,
  },
}
// ---------------------------------------------------------------------
export const dashboardPath = 'dashboard'
export const DashboardRoutesPath = {
  dashboard: {
    path: 'dashboard',
    absolutePath: `/${dashboardPath}`,
  },
  remainingLifeSetting: {
    path: 'remainingLifeSetting',
    absolutePath: `/${dashboardPath}/remainingLifeSetting`,
  },
}
// ---------------------------------------------------------------------
export const selectFactoryPath = 'selectFactory'
export const SelectFactoryRoutesPath = {
  selectFactory: {
    path: 'selectFactory',
    absolutePath: `/${selectFactoryPath}`,
  },
}
// ---------------------------------------------------------------------
export const selectUnitPath = 'selectUnit'
export const SelectUnitRoutesPath = {
  selectUnit: {
    path: 'selectUnit',
    absolutePath: `/${selectUnitPath}`,
  },
}
