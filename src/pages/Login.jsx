import React from 'react'
import { useAuthUserContext } from '../context/AuthUserContext'

const Login = () => {
  const {authUser,signIn} = useAuthUserContext();
  return (
    <div>Login</div>
  )
}

export default Login