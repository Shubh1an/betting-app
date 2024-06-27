import React from "react";
import { Navigate } from "react-router-dom";
import { ClientRoutesConstants } from "../../shared/constants";

type Props = {
  component: React.ComponentType<any>;
  isAuth: boolean;
};
// dddd
const RestrictedRoute = ({
  component: Component,

  isAuth,
}: Props) => {
  console.log({ Component });
  return (
    <>
      {isAuth ? (
        //   <Component auth={} />
        <Component />
      ) : (
        <Navigate to={ClientRoutesConstants.login} />
      )}
    </>
  );
};

export default RestrictedRoute;
