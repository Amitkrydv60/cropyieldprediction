const axios = require("axios");

const predictCrop = async (req, res) => {
  try {
    const response = await axios.post(
      "https://cropyieldprediction-5.onrender.com/predict",  // ✅ LIVE URL
      req.body
    );

    res.json(response.data);

  }
  catch (error) {
  console.error("FULL ERROR:", error.response?.data || error.message);
  res.status(500).json({ message: "Prediction failed" });
}
};

module.exports = { predictCrop };