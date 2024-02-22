import React from "react";

const withAppLayout = (Component: React.FC) => {
  const Hoc = ({ children }: any) => {
    const newProps: any = { children };
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withAppLayout;
