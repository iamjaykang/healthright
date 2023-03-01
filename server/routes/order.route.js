const express = require("express");
const { getShopOrders, getShopOrder, createNewShopOrder, updateExistingShopOrder, deleteShopOrder } = require("../controllers/order.controller");

const checkAuthorization = require("../middleware/authorization.middleware");

const router = express.Router();

router.get("/",checkAuthorization, getShopOrders);

router.get("/:shopOrderId", getShopOrder);

router.post("/", createNewShopOrder);

router.put("/:shopOrderId",checkAuthorization, updateExistingShopOrder);

router.delete("/:shopOrderId",checkAuthorization, deleteShopOrder);

module.exports = router;
