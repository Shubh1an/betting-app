
import React from 'react'
import { Navigate } from 'react-router-dom'
import { ClientRoutesConstants } from '../../shared/constants'

type Props = {
    component: typeof React.Component,
    isAuth:boolean,
    path:string,
    children:Props[],
    isOutletExist:boolean,
    nestedRoutes:Props[],
}
// dddd
const RestrictedRoute = ({component:Component,nestedRoutes,isAuth}: Props) => {
  return (
    <>
      {nestedRoutes ? (
        nestedRoutes.map(
          (ele, i:number) =>
            !ele.isOutletExist && (
              <RestrictedRoute
                key={i+ele?.path}
                isAuth={isAuth}
                path={ele?.path}
                component={ele?.component}
                children={ele?.children}
                isOutletExist={ele?.isOutletExist}
                nestedRoutes={
                   ele?.children
                }
              />
            )
        )
      ) : (
        
           isAuth? (
            //   <Component auth={} />
              <Component />
            
            ):<Navigate to={ClientRoutesConstants.login} />
          
       )} 
    </>
  )
}

export default RestrictedRoute