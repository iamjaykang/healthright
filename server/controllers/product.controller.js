const { BadRequestError } = require("../helpers/error.helper");
const productService = require("../services/product.service");

// Create and Save a new Product
exports.create = async (req, res, next) => {
  try {
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

// Retrieve all Products from the database for Admin.
exports.findAllForAdmin = async (req, res, next) => {
  try {
    const products = await productService.findAllProductsForAdmin();
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
      message: "Products retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
};

// Update a Product by the id in the request
exports.update = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const newProductData = req.body;
    const product = await productService.updateProductById(
      productId,
      newProductData
    );
    res.status(200).send({
      message: "Product updated successfully.",
      data: product,
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

// Find a single Product with name
exports.findOne = async (req, res, next) => {
  try {
    const { productName } = req.params;
    const product = await productService.getProductByName(productName);
    return res.status(200).send({
      data: product,
      success: true,
      message: "Product retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
};

// Find a single Product with an id for admin
exports.findOneByIdForAdmin = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await productService.getProductByIdForAdmin(productId);
    return res.status(200).send({
      success: true,
      message: "Product retrieved successfully!",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a Product with the specified id in the request
exports.delete = async (req, res, next) => {
  try {
    const { productId } = req.params;
    await productService.deleteProduct(productId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

// Delete all Products from the database.
exports.deleteAll = async (req, res, next) => {
  try {
    await productService.deleteAllProducts();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
