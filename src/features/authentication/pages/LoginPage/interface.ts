import { Control } from "react-hook-form";

export interface LoginPageProps {
  handleLogin: () => void;
  control: Control<CredentialType>;
}

export interface CredentialType {
  email: string;
  password: string;
}
