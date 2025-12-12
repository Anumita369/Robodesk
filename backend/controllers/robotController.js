const { sql, poolConnect } = require("../config/db");

exports.getRobots = async (req, res) => {
    await poolConnect;
    const request = new sql.Request();

    const result = await request
        .input("UserID", sql.Int, req.user.userId)
        .query("SELECT * FROM Robots WHERE UserID=@UserID");

    res.json(result.recordset);
};

exports.registerRobot = async (req, res) => {
    const { name, serial } = req.body;

    await poolConnect;
    const request = new sql.Request();

    await request
        .input("UserID", sql.Int, req.user.userId)
        .input("Name", sql.NVarChar, name)
        .input("SerialNumber", sql.NVarChar, serial)
        .query(`
            INSERT INTO Robots (UserID, Name, SerialNumber)
            VALUES (@UserID, @Name, @SerialNumber)
        `);

    res.json({ msg: "Robot registered successfully" });
};
