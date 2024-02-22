import React from "react";

const withSideNavigation = (Component: React.FC) => {
  const Hoc = () => {
    const newProps = {};
    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withSideNavigation;
