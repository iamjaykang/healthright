const express = require("express");
const { getShopOrders, getShopOrder, createNewShopOrder, updateExistingShopOrder } = require("../controllers/order.controller");

const checkAuthorization = require("../middleware/authorization.middleware");

const router = express.Router();

router.get("/",checkAuthorization, getShopOrders);

router.get("/:shopOrderId", getShopOrder);

router.post("/", createNewShopOrder);

router.put("/:shopOrderId",checkAuthorization, updateExistingShopOrder);

module.exports = router;
