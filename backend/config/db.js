const sql = require("mssql");

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const pool = new sql.ConnectionPool(dbConfig);

const poolConnect = pool.connect()
    .then(() => {
        console.log("✅ MSSQL Connected Successfully");
    })
    .catch(err => {
        console.error("❌ Database Connection Error:", err);
    });

module.exports = { sql, poolConnect, pool };
