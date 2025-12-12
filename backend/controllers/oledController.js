const { sql, poolConnect } = require("../config/db");

exports.sendOLEDMessage = async (req, res) => {
    const { robotId, message } = req.body;

    await poolConnect;
    const request = new sql.Request();

    await request
        .input("RobotID", sql.Int, robotId)
        .input("MessageText", sql.NVarChar, message)
        .query(`
            INSERT INTO OLEDMessages (RobotID, MessageText)
            VALUES (@RobotID, @MessageText)
        `);

    res.json({ msg: "OLED message saved" });
};
