import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      <Navbar />

      <div className="pt-32 pb-20 bg-gradient-to-br from-green-100 via-white to-green-50 min-h-screen">

        <div className="max-w-6xl mx-auto px-6">

          {/* 🔥 Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent mb-6">
              Smart Agricultural Solutions
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Transforming traditional farming into intelligent, data-driven agriculture 
              using Artificial Intelligence and Machine Learning technologies.
            </p>
          </div>

          {/* 🌾 Service Cards */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Card 1 */}
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white hover:scale-105 transition duration-500">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                🌾 Crop Yield Prediction
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Advanced machine learning algorithms analyze soil nutrients,
                rainfall, humidity, temperature, and environmental factors
                to predict crop yield with high accuracy.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✔ AI-based regression modeling</li>
                <li>✔ Multi-crop support</li>
                <li>✔ Season-wise predictions</li>
                <li>✔ Data-driven farming decisions</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white hover:scale-105 transition duration-500">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                🌱 Soil Intelligence System
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Evaluate soil fertility using NPK values, pH levels, moisture,
                and organic carbon content to ensure optimal crop growth.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✔ Nutrient balance monitoring</li>
                <li>✔ Soil type classification</li>
                <li>✔ Fertility score generation</li>
                <li>✔ Sustainable agriculture insights</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white hover:scale-105 transition duration-500">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                🌦 Climate Impact Analysis
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Understand how rainfall patterns, temperature changes,
                and humidity fluctuations impact crop productivity.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✔ Rainfall-based modeling</li>
                <li>✔ Temperature optimization</li>
                <li>✔ Climate risk assessment</li>
                <li>✔ Smart planning support</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white hover:scale-105 transition duration-500">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                🚀 AI Research Platform
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Built using real-world agricultural datasets and modern
                machine learning pipelines including preprocessing,
                feature engineering, and model evaluation.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✔ Random Forest & Regression</li>
                <li>✔ Data preprocessing pipeline</li>
                <li>✔ Scalable backend architecture</li>
                <li>✔ Full-stack ML deployment</li>
              </ul>
            </div>

          </div>

          {/* 💎 CTA Section */}
          <div className="mt-24 text-center bg-gradient-to-r from-green-600 to-emerald-500 p-12 rounded-3xl shadow-2xl text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Farming Strategy?
            </h2>
            <p className="mb-6 text-lg">
              Start using intelligent agricultural insights today and maximize your crop productivity.
            </p>
            <button className="bg-white text-green-700 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Get Started Now
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;