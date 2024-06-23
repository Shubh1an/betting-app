import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const PrivateLayout = (props: Props) => {
  return (
    <div><Outlet/></div>
  )
}

export default PrivateLayout