const express = require("express");
const firebaseController = require("../controllers/firebase.controller");
const checkAuthorization = require("../middleware/authorization.middleware");

const router = express.Router();

router.post(
  "/set-custom-user-claims",
  checkAuthorization,
  firebaseController.setCustomUserClaims
);

module.exports = router;
