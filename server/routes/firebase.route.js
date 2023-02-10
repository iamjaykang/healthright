const express = require("express");
const firebaseController = require("../controllers/firebase.controller");

const router = express.Router();

router.post("/set-custom-user-claims", firebaseController.setCustomUserClaims);

module.exports = router;