const express = require("express");

const { getOrders, getOrder, createNewOrder } = require("../controllers/order.controller");

const checkAuthorization = require("../middleware/authorization.middleware");

const router = express.Router();

router.get("/",checkAuthorization, getOrders);

router.get("/:orderId", getOrder);

router.post("/", createNewOrder);

module.exports = router;
