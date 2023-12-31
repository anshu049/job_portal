import React from "react";
import { Link, NavLink, matchPath, matchRoutes, redirect, useActionData, useLocation, useNavigate, } from "react-router-dom";
import defalut_avatar from "../assets/defalut_avatar.jpg"
import { useAuthUserContext } from "../context/AuthUserContext";
import site_logo from "../assets/site_logo.png"
const activeStyle= 'text-accent-color ring-2 rounded-lg p-1 ring-accent-color'

const Header = () => {
    const location = useLocation();
    const {logOut} = useAuthUserContext();
    const navigate = useNavigate()
    const onLogout = async()=>{
        logOut();
    }
    // const ishomeActive = matchPath('/',location.pathname);
    return (
        <div className="flex justify-between text-black p-4 bg-header-color rounded-lg drop-shadow-sm mt-2 mx-2 sticky top-0">
            <div>
                <Link replace to="/"  className="text-3xl font-bold font-sans">
                <div className="flex items-center justify-center gap-2 drop-shadow-lg">
                    <span>
                        <img  width={48} src={site_logo} alt="" />
                    </span>
                Jobelia
                </div>
                </Link>
            </div>
            <nav className="flex-grow flex font-bold justify-center items-center gap-8">
                <NavLink replace
                    to="/"
                    
                    className={({ isActive }) => (isActive ? activeStyle : "")}
                >
                    My listings
                </NavLink>
                <NavLink replace
                    to="/responses"
                    className={({ isActive }) => (isActive ? activeStyle : "")}
                >
                    My Responses
                </NavLink>
                <NavLink replace
                    to="/notifications"
                    className={({ isActive }) => (isActive ? activeStyle : "")}
                >
                    Notifications
                </NavLink>
            </nav>
            <div className="flex items-center gap-2 justify-center">
                <span>
                    <img className="h-12 w-12  object-cover rounded-full " src={defalut_avatar} alt="" />
                </span>
                <Link to='/login' replace >
                <button className="bg-accent-color p-2 font-normal text-base text-white rounded-lg" onClick={onLogout}> Logout</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
