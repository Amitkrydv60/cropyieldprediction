import React from "react";
import { Link } from "react-router-dom";

import farmer from "../assets/farmer.jpg";

function Header() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center">

        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Smart Crop Yield <span className="text-green-600">Prediction</span>
          </h2>

          <p className="text-gray-600 text-lg">
            Empowering farmers with AI-driven technology to predict crop yield
            based on rainfall, temperature and land area.
          </p>

         <Link to="/prediction">
  <button className="bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-green-700 transition duration-300">
    Check Crop Yield Prediction
  </button>
</Link>

        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src={farmer}
            alt="Farmer"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
