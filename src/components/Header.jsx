import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between text-black p-4 bg-header-color rounded-lg drop-shadow-sm mt-2 mx-2 sticky top-0">
            <div>
                <Link to="/" className="text-3xl font-bold font-sans">
                    Job Board
                </Link>
            </div>
            <nav className="flex-grow flex font-bold justify-center items-center gap-8">
                <NavLink
                    to="/jobs"
                    className={({ isActive }) => (isActive ? "text-accent-color" : "")}
                >
                    Find Jobs
                </NavLink>
                <NavLink
                    to="/listings"
                    className={({ isActive }) => (isActive ? "text-accent-color" : "")}
                >
                    My Listings
                </NavLink>
                <NavLink
                    to="/notifications"
                    className={({ isActive }) => (isActive ? "text-accent-color" : "")}
                >
                    Notifications
                </NavLink>
            </nav>
            <span>{/* Person Avatar */}</span>
        </div>
    );
};

export default Header;
