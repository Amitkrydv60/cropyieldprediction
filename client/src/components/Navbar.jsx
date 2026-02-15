import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import farmer from "../assets/farmer.jpg";

function Navbar() {
  const [userName, setUserName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for token and name
    const name = localStorage.getItem("name");
    const token = localStorage.getItem("token");

    if (token && name) {
      setUserName(name);
    } else {
      setUserName(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setUserName(null);
    navigate("/signin"); // redirect to login
  };

  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left: Logo / Farmer Image */}
        <div className="flex items-center space-x-4">
          <img
            src={farmer}
            alt="Farmer"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <span className="font-bold text-xl">CropYield AI</span>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-green-200 transition">
            Home
          </Link>
          <Link to="/services" className="hover:text-green-200 transition">
            Service
          </Link>
          <Link to="/about" className="hover:text-green-200 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-green-200 transition">
            Contact
          </Link>
        </div>

        {/* Right: Auth Buttons / User Info */}
        <div className="flex space-x-4 items-center">
          {userName ? (
            <>
              <span className="font-semibold">Hello, {userName}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-green-800 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-900 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;