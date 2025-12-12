const { sql, poolConnect } = require("../config/db");

exports.sendEmotion = async (req, res) => {
    const { robotId, emotion } = req.body;

    await poolConnect;
    const request = new sql.Request();

    await request
        .input("RobotID", sql.Int, robotId)
        .input("Emotion", sql.NVarChar, emotion)
        .query(`
            INSERT INTO EmotionCommands (RobotID, Emotion)
            VALUES (@RobotID, @Emotion)
        `);

    res.json({ msg: "Emotion command stored" });
};
