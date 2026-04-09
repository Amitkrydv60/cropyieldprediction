const axios = require("axios");

const predictCrop = async (req, res) => {
  try {
    const ML_URL = "https://cropyieldprediction-5.onrender.com/predict";

    // 🔥 Step 1: Wake up server (important)
    try {
      await axios.get("https://cropyieldprediction-5.onrender.com");
      console.log("ML server wakeup call sent");
    } catch (e) {
      console.log("Wakeup failed but continuing...");
    }

    // ⏳ small delay (VERY IMPORTANT)
    await new Promise(r => setTimeout(r, 3000));

    // 🔥 Step 2: actual prediction
    const response = await axios.post(ML_URL, req.body);

    res.json(response.data);

  } catch (error) {
    console.error("FINAL ERROR:", error.response?.data || error.message);
    res.status(500).json({ message: "Prediction failed" });
  }
};

module.exports = { predictCrop };