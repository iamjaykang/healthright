const express = require("express");

const { getOrders } = require("../controllers/order.controller");

const checkAuthorization = require("../middleware/authorization.middleware");

const router = express.Router();

router.get("/", getOrders);

module.exports = router;
