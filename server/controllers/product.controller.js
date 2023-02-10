const { BadRequestError } = require("../helpers/error.helper");
const productService = require("../services/product.service");
const firebase = require("../config/firebaseAdmin.config");

// Create and Save a new Product
exports.create = async (req, res, next) => {
  try {
    // Verify the user's token
    const idToken = req.headers.authorization.split("Bearer ")[1];
    const decodedToken = await firebase.auth().verifyIdToken(idToken);

    // Check if the user is an admin
    if (!decodedToken.admin) {
      return res.status(403).send({ error: "Unauthorized" });
    }

    const product = await productService.createProduct(req.body);
    res.status(201).send({
      success: true,
      message: "Products created successfully!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Retrieve all Products from the database.
exports.findAll = async (req, res, next) => {
  try {
    const products = await productService.findAllProducts();
    res.status(200).send({
      success: true,
      message: "Products retrieved successfully!",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// Get all filtered products by vendor from the database.
exports.getFilteredProductsByVendor = async (req, res, next) => {
  try {
    const vendor = req.params.vendor;
    const products = await productService.getProductsByVendor(vendor);

    res.status(200).send({
      success: true,
      message: "Products retrieved successfully!",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// Get all filtered products by category from the database.
exports.getFilteredProductsByCategory = async (req, res, next) => {
  try {
    const category = req.params.category;
    const products = await productService.getProductsByCategory(category);

    res.status(200).send({
      success: true,
      message: "Products retrieved successfully!",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// Search products by query
exports.searchProducts = async (req, res, next) => {
  try {
    const searchTerm = req.query.q;
    if (!searchTerm) {
      throw new BadRequestError("Search term is required");
    }
    const products = await productService.searchProductsBySearchTerm(
      searchTerm
    );
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// Update a Product by the id in the request
exports.update = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const newData = req.body;
    const product = await productService.updateProductById(product_id, newData);
    res.status(200).send({
      message: "Product updated successfully.",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Find a single Product with an id
exports.findOne = async (req, res, next) => {
  try {
    const { product_name } = req.params;
    const product = await productService.getProductByName(product_name);
    return res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

// Delete a Product with the specified id in the request
exports.delete = async (req, res, next) => {
  try {
    const { product_id } = req.params;
    const product = await productService.deleteProduct(product_id);
    res.status(200).send({
      success: true,
      message: "Product deleted successfully!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Delete all Products from the database.
exports.deleteAll = async (req, res, next) => {
  try {
    const products = await productService.deleteAllProducts();
    res.status(200).send({
      success: true,
      message: "All products deleted successfully!",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

// Find all published Products
exports.findAllPublished = (req, res) => {};
