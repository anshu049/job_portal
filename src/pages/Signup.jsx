import React, { useEffect, useState } from "react";
import { useAuthUserContext } from "../context/AuthUserContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [isButtonDisabled, setButtonDisableState] = useState(false);
  const { signUp, authUser, loading } = useAuthUserContext();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const onSignUp = (e) => {
    e.preventDefault();
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (user.confirmPassword === user.password && user.password.length != 0) {
      signUp(user.email, user.password)
        .then((authUser) => {
          navigate("/login", { replace: true });
        })
        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            setError("Email is already in use");
          } else {
            setError("An Error ocurred.Please try again");
          }
        });
    } else setError("Password did not matched");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 text-accent-color">
        <h1 className="text-4xl mb-4 ">SignUp</h1>
        <hr />
        <label htmlFor="username">Email</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-accent-color"
          type="email"
          id="username"
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
            setError(null);
          }}
          placeholder="Enter Email"
        />
        <label htmlFor="password">Password</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-accent-color"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
            setError(null);
          }}
          placeholder="Enter password"
        />
        <label htmlFor="email">Confirm Password</label>
        <input
          className="outline-none border-grey-300 border-2 bg-transparent p-5 rounded-lg focus:border-accent-color"
          type="password"
          id="email"
          value={user.confirmPassword}
          onChange={(e) => {
            setUser({ ...user, confirmPassword: e.target.value });
            setError(null);
          }}
          placeholder="Enter Password Again"
        />
        <button
          className="p-4 bg-accent-color text-white font-bold rounded-lg mt-3 mb-3"
          type="submit"
          onClick={onSignUp}
        >
          {isButtonDisabled ? "Enter Values" : "SignUp"}
        </button>
        <Link
          replace
          className="ring-2 p-2 rounded-lg ring-accent-color"
          to={"/login"}
        >
          Visit Login Page
        </Link>
        {error && <p className="text-red-400">{error}</p>}
      </div>
    </>
  );
};

export default Signup;
