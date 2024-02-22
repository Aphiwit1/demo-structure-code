import AuthenticationLayout from "@components/AppLayout/components/AuthenticationLayout";
import { AuthenticationRoutesPath, authenticationPath } from "@config/Router";
import { Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

export const AuthenticationRoutes = {
  path: authenticationPath,
  element: (
    <AuthenticationLayout>
      <Outlet />
    </AuthenticationLayout>
  ),
  children: [
    {
      path: AuthenticationRoutesPath.login.path,
      element: <LoginPage />,
    },
  ],
};
