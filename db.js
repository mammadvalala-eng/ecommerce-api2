const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2007",
  database: "ecommerce_db"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    return;
  }

  console.log("Connected to MySQL");
});

module.exports = db;