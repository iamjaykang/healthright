const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

// Create a new product
router.post("/", productController.create);

// Retrieve all products
router.get("/", productController.findAll);

// Retrieve search results for products
router.get("/search", productController.searchProducts);

// Retrieve a product by id
router.get("/:product_name", productController.findOne);

// Retrieve filtered products by Vendor
router.get("/vendor/:vendor", productController.getFilteredProductsByVendor);

// Retrieve filtered products by Category
router.get(
  "/category/:category",
  productController.getFilteredProductsByCategory
);

// Update product by id
router.put("/:product_id", productController.update);

// Delete product by id
router.delete("/:product_id", productController.delete);

// Delete all products
router.delete("/", productController.deleteAll);

module.exports = router;
