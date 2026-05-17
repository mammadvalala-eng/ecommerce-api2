const mysql = require("mysql2");


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2007",
  database: "testdb"
});

// PUT
const updateUser = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const sql = "UPDATE users SET name = ? WHERE id = ?";

  db.query(sql, [name, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Update olundu");
  });
};

// DELETE
const deleteUser = (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM users WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Silindi");
  });
};

module.exports = {
  updateUser,
  deleteUser
};