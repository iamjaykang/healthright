const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const checkAuthorization = require("../middleware/authorization.middleware");

// Create a new product
router.post("/", checkAuthorization, productController.create);

// Retrieve all products
router.get("/", productController.findAll);

// Retrieve all products for Admin
router.get("/admin", checkAuthorization, productController.findAllForAdmin);

// Retrieve product by Id for Admin
router.get("/admin/:productId", checkAuthorization, productController.findOneByIdForAdmin);

// Retrieve search results for products
router.get("/search", productController.searchProducts);

// Retrieve a product by id
router.get("/:productName", productController.findOne);

// Retrieve filtered products by Vendor
router.get("/vendor/:vendor", productController.getFilteredProductsByVendor);

// Retrieve filtered products by Category
router.get(
  "/category/:category",
  productController.getFilteredProductsByCategory
);

// Update product by id
router.put("/:productId", checkAuthorization, productController.update);

// Delete product by id
router.delete("/:productId", checkAuthorization, productController.delete);

// Delete all products
router.delete("/", checkAuthorization, productController.deleteAll);

module.exports = router;
