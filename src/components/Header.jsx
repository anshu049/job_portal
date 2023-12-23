import React from "react";
import { Link, NavLink, matchPath, matchRoutes, useLocation } from "react-router-dom";

const activeStyle= 'text-accent-color ring-2 rounded-lg p-1 ring-accent-color'

const Header = () => {
    const location = useLocation();
    const ishomeActive = location.pathname ==='/';
    return (
        <div className="flex justify-between text-black p-4 bg-header-color rounded-lg drop-shadow-sm mt-2 mx-2 sticky top-0">
            <div>
                <Link to="/" className="text-3xl font-bold font-sans">
                    Job Board
                </Link>
            </div>
            <nav className="flex-grow flex font-bold justify-center items-center gap-8">
                <NavLink replace
                    to="/"
                    className={({ isActive }) => (ishomeActive ? activeStyle : "")}
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
            <span>{/* Person Avatar */}</span>
        </div>
    );
};

export default Header;
