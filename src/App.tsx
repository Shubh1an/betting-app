import "react-notifications-component/dist/theme.css";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./routes/pages/private/protected/ProtectedRoute";
import Login from "./routes/pages/public/login/Login";
import SignUp from "./routes/pages/public/signup/SignUp";

import { useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import { useSelector } from "react-redux";
import Loader from "./customComponents/loader/Loader";
import { RootState } from "./services/redux/store";
import { setUserDetails } from "./services/redux/commonSlice";
import { useAppDispatch } from "./hooks/hooks";
import RestrictedRoute from "./routes/layouts/restrictedRoute";
import { ClientRoutesConstants } from "./shared/constants";
import PrivateLayout from "./routes/layouts/privateLayout";
import PublicRoute from "./routes/layouts/publicLayout";
import Dashboard from "./routes/pages/private/dashboard/dashboard";
// import Dashboard from "./routes/pages/private/dashboard";
import OTPscreen from "./routes/pages/public/otp/OTPscreen";
function App() {
  const { isLoading, auth } =
    useSelector((state: RootState) => state?.common) || {};
  const { isAuth, userDetails } = auth || {};
  const dispatch = useAppDispatch();
  // const isAuth=false
  useEffect(() => {
    const userData: any = localStorage.getItem("userData");
    if (Object?.keys(userData || {})?.length) {
      //set user Logic
      console.log({ userData });
      dispatch(
        setUserDetails({ userDetails: JSON.parse(userData), isAuth: true })
      );
    }
  }, []);
  console.log({ isAuth });
  const routes = [
    {
      path: ClientRoutesConstants?.dashboard,
      component: Dashboard,
      exact: false,
      isOutletExist: false,
      restricted: false,

      children: [],
    },

    {
      path: ClientRoutesConstants?.login,
      component: Login,
      exact: false,
      isOutletExist: false,
      restricted: true,
      children: [],
    },
    {
      path: ClientRoutesConstants?.signUp,
      component: SignUp,
      exact: false,
      isOutletExist: false,
      restricted: true,
      children: [],
    },
    {
      path: ClientRoutesConstants?.otp,
      component: OTPscreen,
      exact: false,
      isOutletExist: false,
      restricted: true,
      children: [],
    },

    {
      path: "*",
      component: Login,
      exact: false,
      isOutletExist: false,
      restricted: true,
      children: [],
    },
    {
      path: "*",
      component: () => <Navigate to={ClientRoutesConstants?.dashboard} />,
      exact: false,
      isOutletExist: false,
      restricted: false,
      children: [],
    },
  ];
  return (
    <div className="md:hidden">
      <ReactNotifications />
      {isLoading && <Loader />}

      <Routes>
        <Route
          path="/"
          element={
            isAuth ? (
              <Navigate to={ClientRoutesConstants?.dashboard} replace />
            ) : (
              <Navigate to={ClientRoutesConstants?.login} />
            )
          }
        />
        {!isAuth &&
          routes.map(
            (ele, i) =>
              ele?.restricted && (
                <Route
                  key={i + "a"}
                  path={ele?.path}
                  element={<PublicRoute component={ele?.component} />}
                />
              )
          )}

        {isAuth && (
          <Route path="" element={<PrivateLayout />}>
            {routes.map((ele, i) => {
              return (
                !ele?.restricted && (
                  <Route
                    key={i + "a"}
                    path={ele?.path}
                    element={
                      <RestrictedRoute
                        isAuth={isAuth}
                        component={ele?.component}
                      />
                    }
                  />
                )
              );
            })}
            {/* <Route
              path="*"
              element={
                <Navigate to={ClientRoutesConstants?.dashboard} replace />
              }
            /> */}
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
