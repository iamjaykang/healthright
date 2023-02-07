const express = require("express");
const {
  getUsers,
  getUser,
  createNewUser,
  deleteUser,
  updateExistingUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createNewUser);
router.put("/:id", updateExistingUser);
router.delete("/:id", deleteUser);

module.exports = router;
