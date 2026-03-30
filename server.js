const express = require("express");
const db = require("./db.js");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ 
    message: "✅ E-commerce Backend Server işləyir!",
    status: "OK"
  });
});

app.get("/test-db", (req, res) => {
  db.query("SELECT 1 + 1 as result", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "DB xətası: " + err.message });
    }
    res.json({ message: "✅ DB işləyir!", result: results[0] });
  });
});

app.listen(PORT, () => {
  console.log('🌐 Server http://localhost:${PORT} da işləyir');
});
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    res.json(results);
  });
});