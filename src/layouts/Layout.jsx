import React from "react";
import Header from "../components/Header";
import { Outlet, redirect } from "react-router-dom";
import Footer from "../components/Footer";
import { getAuth } from "firebase/auth";
import { app } from "../lib/firebase";

const Layout = () => {
  return (
    <div className="flex flex-col h-[100vh] mx-2 font-sans bg-body-color overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export async function authLoader(){
  const auth = getAuth(app);
  if(!auth.currentUser){
    return redirect('/login');
  }
  return null;
}

export default Layout;
