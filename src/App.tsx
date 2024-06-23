import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import routes from './routes/pages'
import Login from './routes/pages/public/login/Login'
import SignUp from './routes/pages/public/signup/SignUp'
import { ProtectedRoute } from './routes/pages/private/protected/ProtectedRoute'
import PrivateLayout from './routes/layouts/privateLayout'
function App() {
  const isAuth = false

  return (
    <div className='md:hidden'>
      <Routes>
        {!isAuth && (
          <>
            <Route path="/login" index element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
          // <Route path="" element={<></>}>
          //   {routes.map(
          //     (ele, i) => (
          //       <Route
          //         key={i + "a"}
          //         path={ele?.path}
          //         element={<PublicRoute component={ele?.component} />}
          //       />
          //     )
          //   )}
          // </Route>
        )}
        {isAuth && (
          <Route element={<ProtectedRoute />}>
           
            <Route path="/" element={<Navigate to="/Profile" />} />
          </Route>
          // <Route path="" element={<PrivateLayout />}>
          //   {routes.map(
          //     (ele, i) =>
          //       !ele.isOutletExist && (
          //         <Route
          //           key={i + "a"}
          //           path={ele?.path}
          //           element={
          //             // <ele.component/>
          //             <RestrictedRoute
          //               checkedroles={ele?.roles}
          //               userrole={auth?.role}
          //               path={ele?.path}
          //               component={ele?.component}
          //               nestedRoutes={
          //                 ele?.children &&
          //                 ele?.children.length > 0 &&
          //                 ele?.children
          //               }
          //             />
          //           }
          //         />
          //       )
          //   )}
          // </Route>
        )}
        {/* <Route path="*" element={!auth?<Navigate to={"/auth/login"}/>:<Navigate to={ClientRoutesConstants?.dashboard}/>}/> */}
      </Routes>
    </div>
  )
}

export default App
