import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { UseAuth } from '../context/AuthContext'

const ProtectedMain = () => {
const {LoggedInUser} = UseAuth()
if(!LoggedInUser){
  return <Navigate to={"/Auth"}/>
}
  return (
    <Outlet/>
  )
}

export default ProtectedMain