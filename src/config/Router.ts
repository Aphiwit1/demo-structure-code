export const homePath = "home";
export const authenticationPath = "auth";

export const AuthenticationRoutesPath = {
  login: {
    path: "login",
    absolutePath: `/${authenticationPath}/login`,
  },
  register: {
    path: "register",
    absolutePath: `/${authenticationPath}/register`,
  },
};

export const dashboardPath = "dashboard";
export const DashboardRoutesPath = {
  dashboard: {
    path: "dashboard",
    absolutePath: `/${dashboardPath}`,
  },
};
