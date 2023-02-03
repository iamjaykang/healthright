const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

// Create a new product
router.post("/", productController.create);

// Retrieve all products
router.get("/", productController.findAll);

module.exports = router;