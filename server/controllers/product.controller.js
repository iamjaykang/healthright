const productService = require("../services/product.service");

// Create and Save a new Product
exports.create = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).send({
      success: true,
      message: "Products created successfully!",
      data: product,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

// Retrieve all Products from the database.
exports.findAll = async (req, res) => {
  try {
    const products = await productService.findAllProducts();
    res.status(200).send({
      success: true,
      message: "Products retrieved successfully!",
      data: products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message:
        error.message || "Some error occurred while retrieving products.",
    });
  }
};

// Get all filtered products by vendor from the database.
exports.getFilteredProductsByVendor = async (req, res) => {
  try {
    const vendor = req.params.vendor;
    const products = await productService.getProductsByVendor(vendor);

    res.status(200).send({
      success: true,
      message: "Products retrieved successfully!",
      data: products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// Get all filtered products by category from the database.
exports.getFilteredProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await productService.getProductsByCategory(category);

    res.status(200).send({
      success: true,
      message: "Products retrieved successfully!",
      data: products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// Search products by query
exports.searchProducts = async (req, res) => {
  try {
    const searchTerm = req.query.q;
    const products = await productService.searchProductsBySearchTerm(
      searchTerm
    );
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update a Product by the id in the request
exports.update = async (req, res) => {
  try {
    const { product_id } = req.params;
    const newData = req.body;
    const product = await productService.updateProduct(product_id, newData);
    res.status(200).send({
      message: "Product updated successfully.",
      data: product,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "An error occurred while updating the product.",
    });
  }
};

// Find a single Product with an id
exports.findOne = (req, res) => {};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {};

// Find all published Products
exports.findAllPublished = (req, res) => {};
