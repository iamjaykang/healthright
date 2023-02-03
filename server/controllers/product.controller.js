const db = require("../models");
const productService = require("../services/product.service");

// Create and Save a new Product
exports.create = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Retrieve all Products from the database.
exports.findAll = async (req, res) => {
  try {
    const products = await productService.findAllProducts();
    res.send({ message: "Products retrieved successfully!", products });
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving products.",
    });
  }
};

// Get all filtered products by vendor from the database.
exports.getFilteredProducts = async (req, res) => {
  try {
    // Change the params to lowercase
    const vendor = req.params.vendor.toLowerCase();
    const products = await productService.getVendorProducts(vendor);

    res.status(200).send({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

// Find a single Product with an id
exports.findOne = (req, res) => {};

// Update a Product by the id in the request
exports.update = (req, res) => {};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {};

// Find all published Products
exports.findAllPublished = (req, res) => {};
