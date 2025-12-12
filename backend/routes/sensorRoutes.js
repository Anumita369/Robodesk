const express = require("express");
const router = express.Router();
const { logSensorData, getSensorHistory } = require("../controllers/sensorController");

router.post("/log", logSensorData);
router.get("/:robotId", getSensorHistory);

module.exports = router;
