const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

// Create a new product
router.post("/", productController.create);

// Retrieve all products
router.get("/", productController.findAll);

// Retrieve filtered products by Vendor
router.get("/vendor/:vendor", productController.getFilteredProductsByVendor);

// Retrieve filtered products by Category
router.get(
  "/category/:category",
  productController.getFilteredProductsByCategory
);

module.exports = router;
