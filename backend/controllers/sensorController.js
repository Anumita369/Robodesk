const { sql, poolConnect } = require("../config/db");

exports.logSensorData = async (req, res) => {
    const { robotId, temp, humidity, light, moisture, motion } = req.body;

    await poolConnect;
    const request = new sql.Request();

    await request
        .input("RobotID", sql.Int, robotId)
        .input("Temperature", sql.Float, temp)
        .input("Humidity", sql.Float, humidity)
        .input("LightLevel", sql.Int, light)
        .input("MoistureLevel", sql.Int, moisture)
        .input("Motion", sql.Bit, motion)
        .query(`
            INSERT INTO SensorLogs
            (RobotID, Temperature, Humidity, LightLevel, MoistureLevel, Motion)
            VALUES
            (@RobotID, @Temperature, @Humidity, @LightLevel, @MoistureLevel, @Motion)
        `);

    res.json({ msg: "Sensor data logged" });
};

exports.getSensorHistory = async (req, res) => {
    const robotId = req.params.robotId;

    await poolConnect;
    const request = new sql.Request();

    const result = await request
        .input("RobotID", sql.Int, robotId)
        .query(`
            SELECT TOP 200 *
            FROM SensorLogs
            WHERE RobotID=@RobotID
            ORDER BY LogID DESC
        `);

    res.json(result.recordset);
};
