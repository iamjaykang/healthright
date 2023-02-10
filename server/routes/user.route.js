const express = require("express");
const {
  getUsers,
  getUser,
  createNewUser,
  deleteUser,
  updateExistingUser,
} = require("../controllers/user.controller");
const checkAuthorization = require("../middleware/authorization.middleware");

const router = express.Router();

router.get("/", checkAuthorization, getUsers);
router.get("/:id", checkAuthorization, getUser);
router.post("/", createNewUser);
router.put("/:id", checkAuthorization, updateExistingUser);
router.delete("/:id", checkAuthorization, deleteUser);

module.exports = router;
