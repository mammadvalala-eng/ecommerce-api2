const express = require("express");
const router = express.Router();

const {
  updateUser,
  deleteUser
} = require("../controllers/userController");

// PUT
router.put("/users/:id", updateUser);

// DELETE
router.delete("/users/:id", deleteUser);

module.exports = router;