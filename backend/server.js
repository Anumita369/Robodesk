require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const robotRoutes = require("./routes/robotRoutes");
const sensorRoutes = require("./routes/sensorRoutes");
const emotionRoutes = require("./routes/emotionRoutes");
const oledRoutes = require("./routes/oledRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("🚀 Backend is running!");
});
app.use("/api/auth", authRoutes);
app.use("/api/robots", robotRoutes);
app.use("/api/sensors", sensorRoutes);
app.use("/api/emotion", emotionRoutes);
app.use("/api/oled", oledRoutes);

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
