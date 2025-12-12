const express = require("express");
const router = express.Router();
const {
  getRobots,
  getRobot,
  createRobot,
  updateRobot,
  deleteRobot
} = require("../controllers/robotController");

// If you have auth middleware, include it here
// const auth = require("../middleware/auth")

router.get("/robots", getRobots);
router.get("/robot/:id", getRobot);
router.post("/robot", createRobot);
router.put("/robot/:id", updateRobot);
router.delete("/robot/:id", deleteRobot);

module.exports = router;
