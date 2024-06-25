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
      dispatch(setUserDetails({ userDetails: userData, isAuth: true }));
    }
  }, []);

  const routes = [
    {
      path: ClientRoutesConstants?.dashboard,
      component: <>Hello</>,
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
      path: "*",
      component: Login,
      exact: false,
      isOutletExist: false,
      restricted: true,
      children: [],
    },
  ];
  return (
    <div className="md:hidden">
      <ReactNotifications />
      {isLoading && <Loader />}

      <Routes>
        {!isAuth &&
          // <>
          //   <Route path="/login" index element={<Login />} />
          //   <Route path="/signup" element={<SignUp />} />
          // </>

          routes.map((ele, i) => (
            <Route
              key={i + "a"}
              path={ele?.path}
              element={<PublicRoute component={ele?.component} />}
            />
          ))}
        {isAuth && (
          <Route path="" element={<PrivateLayout />}>
            {routes.map(
              (ele, i) =>
                !ele.isOutletExist && (
                  <Route
                    key={i + "a"}
                    path={ele?.path}
                    element={
                      // <ele.component/>
                      <RestrictedRoute
                        path={ele?.path}
                        component={ele?.component}
                        nestedRoutes={ele?.children}
                      />
                    }
                  />
                )
            )}
          </Route>
        )}
        {/* <Route path="*" element={!auth?<Navigate to={"/auth/login"}/>:<Navigate to={ClientRoutesConstants?.dashboard}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
