const axios = require("axios");

const predictCrop = async (req, res) => {
  const ML_URL = "https://cropyieldprediction-5.onrender.com/predict";

  try {
    let response;

    for (let i = 0; i < 5; i++) {
      try {
        response = await axios.post(ML_URL, req.body);
        return res.json(response.data); // ✅ success
      } catch (err) {

        const status = err.response?.status;

        console.log("Attempt:", i + 1, "Status:", status);

        // 🔥 Handle cold start + rate limit
        if (status === 429 || !status) {
          await new Promise(r => setTimeout(r, 4000)); // ⏳ wait 4 sec
        } else {
          throw err;
        }
      }
    }

    // ❌ after retries failed
    return res.status(500).json({
      message: "ML server busy, try again after few seconds"
    });

  } catch (error) {
    console.error("FINAL ERROR:", error.message);
    res.status(500).json({ message: "Prediction failed" });
  }
};

module.exports = { predictCrop };