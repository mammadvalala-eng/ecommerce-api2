const db = require("../db");

const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {

    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.json(results);
  });
};

module.exports = {
  getProducts
};