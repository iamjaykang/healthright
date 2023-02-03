const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

// Create a new product
router.post("/", productController.create);

// Retrieve all products
router.get("/", productController.findAll);

// Retrieve filtered products
router.get("/:vendor", productController.getFilteredProducts);

module.exports = router;