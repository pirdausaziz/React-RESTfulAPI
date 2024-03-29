const { Pool } = require("pg");

const pool = new Pool({
    user: "",
    host: "localhost",
    database: "adminDB",
    password: "",
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

module.exports = { pool };