import React from "react";
import { RouteProps, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../services/redux/store";
import { ClientRoutesConstants } from "../../shared/constants";

interface PublicRouteProps {
  component: React.ComponentType<any>;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  ...props
}) => {
  const { auth } = useSelector((state: RootState) => state.common);
  const { isAuth } = auth;
  console.log("component=>>>", isAuth);
  return (
    <>
      {!isAuth ? (
        <Component {...props} />
      ) : (
        <Navigate to={ClientRoutesConstants.dashboard} />
      )}
    </>
  );
};

export default PublicRoute;
