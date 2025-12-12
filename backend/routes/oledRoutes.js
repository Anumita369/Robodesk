const express = require("express");
const router = express.Router();
const { sendOLEDMessage } = require("../controllers/oledController");

router.post("/", sendOLEDMessage);

module.exports = router;
