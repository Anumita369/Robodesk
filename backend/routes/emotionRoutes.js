const express = require("express");
const router = express.Router();
const { sendEmotion } = require("../controllers/emotionController");

router.post("/", sendEmotion);

module.exports = router;
