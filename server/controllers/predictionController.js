const axios = require("axios");

const predictCrop = async (req, res) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5001/predict",
      req.body
    );

    res.json(response.data);

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Prediction failed" });
  }
};

module.exports = { predictCrop };