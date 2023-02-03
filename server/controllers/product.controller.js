const db = require("../models");
const productService = require("../services/product.service");
const Op = db.Sequelize.Op;

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
exports.findAll = (req, res) => {};

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
