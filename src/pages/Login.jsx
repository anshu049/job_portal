
import { useAuthUserContext } from '../context/AuthUserContext'
import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';


const Login = () => {
  const [isButtonDisabled, setButtonDisableState] = useState(false);
  const {signIn} = useAuthUserContext();
  const [isError,setError] = useState(false)
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = () => {
     signIn(user.email,user.password).then(_=>{
      navigate('/',{replace:true})
     })
    .catch((error)=>{
      setError(true)
    })
    
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisableState(false);
    } else {
      setButtonDisableState(true);
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 text-accent-color">
        <h1 className="text-4xl mb-4 ">Login</h1>
        <hr />
        <label htmlFor="password">Email</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-accent-color"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => {setUser({ ...user, email: e.target.value })
        setError(false)}}
          placeholder="Enter email"
        />
        <label htmlFor="email">Password</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-accent-color"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter password"
        />
        <button
          className="p-4 bg-accent-color text-white font-bold rounded-lg mt-3 mb-3"
          type="submit"
          onClick={onLogin}
        >
          {isButtonDisabled ? "Enter data" : "Login"}
        </button>
        <Link replace className='ring-2 p-2 rounded-lg ring-accent-color' to={"/signup"}>Visit SignUp Page</Link>
        {isError && <p className='text-red-400'>There was an error.Please Try Again</p>}
      </div>
    </>
  )
}

export async function authCheckLoader(){
  await auth.authStateReady()
  if(auth.currentUser){
    return redirect('/')
  }
  return false;
}

export default Login