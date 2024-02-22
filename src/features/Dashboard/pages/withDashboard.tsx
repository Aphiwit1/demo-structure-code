import React from "react";

const withDashboard = (Component: React.FC) => {
  const Hoc = () => {
    const newProps = {};
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withDashboard;
