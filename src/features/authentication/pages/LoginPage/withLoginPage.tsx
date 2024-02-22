import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CredentialType } from "./interface";
import { useNavigate } from "react-router-dom";
import { DashboardRoutesPath } from "@config/Router";

const withLoginPage = (Component: React.FC) => {
  const Hoc = () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<CredentialType>({ mode: "all" });

    const navigate = useNavigate();

    const handleLogin: SubmitHandler<CredentialType> = ({
      email,
      password,
    }: any) => {
      console.log(email, password);
      navigate(DashboardRoutesPath.dashboard.absolutePath);
    };

    const newProps: any = {
      control,
      handleLogin: handleSubmit(handleLogin),
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withLoginPage;
