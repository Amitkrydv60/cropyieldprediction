import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-green-100 min-h-screen">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl">

          <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
            About Our Crop Yield Prediction System 🌾
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our Crop Yield Prediction System is an advanced Machine Learning
            powered platform designed to help farmers, researchers, and
            agricultural planners estimate crop production based on soil,
            weather, and environmental conditions.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-green-50 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                🌱 Smart Analysis
              </h3>
              <p className="text-gray-600">
                Uses trained ML models to analyze NPK values, soil type,
                rainfall, and temperature.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                📊 Accurate Prediction
              </h3>
              <p className="text-gray-600">
                Provides yield prediction in tons per hectare for better
                decision making.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                🚀 Research Based
              </h3>
              <p className="text-gray-600">
                Built using real agricultural datasets and research-level
                machine learning techniques.
              </p>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;