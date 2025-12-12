const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sql, poolConnect } = require("../config/db");

exports.login = async (req, res) => {
    const { email, password } = req.body;

    await poolConnect;
    const request = new sql.Request();

    const result = await request
        .input("Email", sql.NVarChar, email)
        .query(`SELECT * FROM Users WHERE Email=@Email`);

    const user = result.recordset[0];
    if (!user) return res.status(404).json({ msg: "User not found" });

    const passwordMatch = await bcrypt.compare(password, user.PasswordHash);
    if (!passwordMatch) return res.status(400).json({ msg: "Incorrect password" });

    const token = jwt.sign(
        { userId: user.UserID, email: user.Email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    res.json({
        token,
        userId: user.UserID
    });
};
