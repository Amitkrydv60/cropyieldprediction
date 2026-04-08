

const express = require("express");
const router = express.Router();
const { predictCrop } = require("../controllers/predictionController");

router.post("/", predictCrop); // ✅ FIXED

module.exports = router;