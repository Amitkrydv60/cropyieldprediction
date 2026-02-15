const express = require("express");
const router = express.Router();
const { predictCrop } = require("../controllers/predictionController");

router.post("/predict", predictCrop);

module.exports = router;