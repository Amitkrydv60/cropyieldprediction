import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Prediction() {
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    Soil_pH: "",
    Soil_Moisture: "",
    Organic_Carbon: "",
    Temperature: "",
    Humidity: "",
    Rainfall: "",
    Season: "",
    Soil_Type: "",
    Crop_Type: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          N: Number(formData.N),
          P: Number(formData.P),
          K: Number(formData.K),
          Soil_pH: Number(formData.Soil_pH),
          Soil_Moisture: Number(formData.Soil_Moisture),
          Organic_Carbon: Number(formData.Organic_Carbon),
          Temperature: Number(formData.Temperature),
          Humidity: Number(formData.Humidity),
          Rainfall: Number(formData.Rainfall),
        }),
      });

      const data = await res.json();

      setResult(data.predicted_yield);
      setLoading(false);

    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Prediction Failed!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-20 bg-green-50 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">

          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Crop Yield Prediction
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <input type="number" name="N" placeholder="Nitrogen (N)" onChange={handleChange} className="border px-4 py-3 rounded-lg" />
            <input type="number" name="P" placeholder="Phosphorus (P)" onChange={handleChange} className="border px-4 py-3 rounded-lg" />
            <input type="number" name="K" placeholder="Potassium (K)" onChange={handleChange} className="border px-4 py-3 rounded-lg" />

            <input type="number" step="0.1" name="Soil_pH" placeholder="Soil pH" onChange={handleChange} className="border px-4 py-3 rounded-lg" />
            <input type="number" name="Soil_Moisture" placeholder="Soil Moisture (%)" onChange={handleChange} className="border px-4 py-3 rounded-lg" />
            <input type="number" step="0.1" name="Organic_Carbon" placeholder="Organic Carbon" onChange={handleChange} className="border px-4 py-3 rounded-lg" />

            <input type="number" name="Temperature" placeholder="Temperature (°C)" onChange={handleChange} className="border px-4 py-3 rounded-lg" />
            <input type="number" name="Humidity" placeholder="Humidity (%)" onChange={handleChange} className="border px-4 py-3 rounded-lg" />
            <input type="number" name="Rainfall" placeholder="Rainfall (mm)" onChange={handleChange} className="border px-4 py-3 rounded-lg" />

            <select name="Season" onChange={handleChange} className="border px-4 py-3 rounded-lg">
              <option value="">Select Season</option>
              <option value="Kharif">Kharif</option>
              <option value="Rabi">Rabi</option>
              <option value="Zaid">Zaid</option>
            </select>

            <select name="Soil_Type" onChange={handleChange} className="border px-4 py-3 rounded-lg">
              <option value="">Select Soil Type</option>
              <option value="Loamy">Loamy</option>
              <option value="Clay">Clay</option>
              <option value="Sandy">Sandy</option>
              <option value="Silty">Silty</option>
            </select>

            <select name="Crop_Type" onChange={handleChange} className="border px-4 py-3 rounded-lg">
              <option value="">Select Crop</option>
              <option value="Wheat">Wheat</option>
              <option value="Rice">Rice</option>
              <option value="Maize">Maize</option>
              <option value="Cotton">Cotton</option>
            </select>

            <button
              type="submit"
              className="md:col-span-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              {loading ? "Predicting..." : "Predict Yield"}
            </button>

          </form>

          {result && (
            <div className="mt-8 text-center bg-green-100 p-5 rounded-lg">
              <h3 className="text-2xl font-semibold text-green-800">
                Predicted Yield: {result} ton/hectare
              </h3>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Prediction;