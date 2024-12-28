import React from "react";
import Avatar from "../components/Avater";
import { FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    // Example notification count
    const notificationCount = 5;

    return (
        <nav className="sticky top-0 flex justify-between items-center px-6 py-4 w-full z-50 bg-white shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
                <NavLink to="/home" className="text-xl font-semibold text-gray-800 hover:text-blue-500">
                    Certify360
                </NavLink>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        `text-md font-medium hover:text-blue-500 ${isActive ? "text-blue-500" : "text-gray-600"}`
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/certificate"
                    className={({ isActive }) =>
                        `text-md font-medium hover:text-blue-500 ${isActive ? "text-blue-500" : "text-gray-600"}`
                    }
                >
                    Certificate
                </NavLink>

                <NavLink
                    to="/trade-licence"
                    className={({ isActive }) =>
                        `text-md font-medium hover:text-blue-500 ${isActive ? "text-blue-500" : "text-gray-600"}`
                    }
                >
                    Trade Licence
                </NavLink>

                <NavLink
                    to="/course-options"
                    className={({ isActive }) =>
                        `text-md font-medium hover:text-blue-500 ${isActive ? "text-blue-500" : "text-gray-600"}`
                    }
                >
                    Course Options
                </NavLink>
            </div>

            {/* Notification and Avatar Section */}
            <div className="flex items-center space-x-6 relative">
                {/* Notification Icon with Badge */}
                <div className="relative cursor-pointer">
                    <FaBell className="text-gray-600 hover:text-blue-500" size={24} />
                    {notificationCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {notificationCount}
                        </span>
                    )}
                </div>

                {/* Avatar with round image */}
                <Avatar 
                    fullName="John Doe"
                    circle={true}  // Make the avatar round
                    divCustomClass="h-10 w-10" 
                    imgCustomClass="rounded-full"  // Ensure image is round
                    nameCustomClass="text-xl flex items-center cursor-pointer" 
                />
            </div>
        </nav>
    );
};

export default Header;
