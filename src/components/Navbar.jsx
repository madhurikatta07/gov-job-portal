import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage / token logic here
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Gov Exams Portal
        </Link>

        {/* Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>
          <Link to="/profile" className="hover:text-gray-200">
            Profile
          </Link>
          <Link to="/notes" className="hover:text-gray-200">
            Notes
          </Link>
          <Link to="/videos" className="hover:text-gray-200">
            Videos
          </Link>
          <Link to="/notifications" className="hover:text-gray-200">
            Notifications
          </Link>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
