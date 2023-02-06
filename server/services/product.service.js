const { NotFoundError } = require("../helpers/error.helper");
const db = require("../models");
const cleanUpProductDataUtil = require("../utils/cleanUpProductData.util");
const Product = db.products;
const ProductCategory = db.productCategories;
const ProductVendor = db.productVendors;
const productDetails = require("../config/constants.config")(
  ProductVendor,
  ProductCategory
);

exports.createProduct = async (productData) => {
  const { vendor_name, category_name } = productData;

  try {
    // Check if vendor exists
    const vendor = await ProductVendor.findOne({ where: { vendor_name } });
    if (!vendor) {
      // If vendor does not exist, create a new vendor
      const newVendor = await ProductVendor.create({ vendor_name });
      productData.vendor_id = newVendor.id;
    } else {
      // If vendor exists, use the existing vendor's id
      productData.vendor_id = vendor.id;
    }

    // Check if category exists
    const category = await ProductCategory.findOne({
      where: { category_name },
    });
    if (!category) {
      // If category does not exist, create a new category
      const newCategory = await ProductCategory.create({ category_name });
      productData.category_id = newCategory.id;
    } else {
      // If category exists, use the existing category's id
      productData.category_id = category.id;
    }

    // Create the product
    const product = await Product.create(productData);

    return product;
  } catch (error) {
    throw error;
  }
};

// Retrieve all Products from the database along with vendor and category details.
exports.findAllProducts = async () => {
  try {
    // Find all products and include the related vendor and category information
    const products = await Product.findAll({
      ...productDetails,
    });

    if (!products) {
      throw new NotFoundError(`Failed to retrieve all products`);
    }

    // Clean up the product data by only including the necessary information
    const cleanedUpProducts = cleanUpProductDataUtil(products);

    // Return the cleaned up product data
    return cleanedUpProducts;
  } catch (error) {
    throw error;
  }
};

// Get all products by Vendor
exports.getProductsByVendor = async (vendorName) => {
  try {
    // Find the vendor by name
    const vendor = await ProductVendor.findOne({
      where: {
        vendor_name: {
          [db.Sequelize.Op.iLike]: vendorName,
        },
      },
    });

    if (!vendor) {
      throw new NotFoundError(`Vendor not found`);
    }

    // Get all the products for the found vendor
    const products = await Product.findAll({
      ...productDetails,
      where: {
        vendor_id: {
          [db.Sequelize.Op.eq]: vendor.id,
        },
      },
    });

    if (!products) {
      throw new NotFoundError(`No product(s) found for the vendor`);
    }

    // Clean up the product data by only including the necessary information
    const cleanedUpProducts = cleanUpProductDataUtil(products);

    return cleanedUpProducts;
  } catch (error) {
    throw error;
  }
};

// Get all products by Category
exports.getProductsByCategory = async (categoryName) => {
  try {
    // Find the category by name
    const category = await ProductCategory.findOne({
      where: {
        category_name: {
          [db.Sequelize.Op.iLike]: categoryName,
        },
      },
    });

    if (!category) {
      throw new NotFoundError(`Category not found`);
    }

    // Get all the products for the found category
    const products = await Product.findAll({
      ...productDetails,
      where: {
        category_id: {
          [db.Sequelize.Op.eq]: category.id,
        },
      },
    });

    if (!products) {
      throw new NotFoundError(`No product(s) found for the category`);
    }

    // Clean up the product data by only including the necessary information
    const cleanedUpProducts = cleanUpProductDataUtil(products);

    return cleanedUpProducts;
  } catch (error) {
    throw error;
  }
};

// Search Products by search term
exports.searchProductsBySearchTerm = async (searchTerm) => {
  try {
    // Find all the products for the serach term
    const products = await Product.findAll({
      ...productDetails,
      where: {
        [db.Sequelize.Op.or]: [
          { name: { [db.Sequelize.Op.iLike]: `%${searchTerm}%` } },
          { description: { [db.Sequelize.Op.iLike]: `%${searchTerm}%` } },
        ],
      },
    });

    if (products.length === 0) {
      throw new NotFoundError(`No products found for the given search term`);
    }

    const cleanedUpProducts = cleanUpProductDataUtil(products);

    return cleanedUpProducts;
  } catch (error) {
    throw error;
  }
};

// Update Product by id
exports.updateProductById = async (id, newProductData) => {
  try {
    // Get the product by id, along with its associated vendor and category
    const product = await Product.findByPk(id, {
      include: [
        { model: ProductVendor, as: "vendor" },
        { model: ProductCategory, as: "category" },
      ],
    });

    // If product is not found, throw an error
    if (!product) {
      throw new NotFoundError(`Product with the id not found`);
    }

    // Destructure the new data
    const {
      name,
      description,
      product_image,
      qty_in_stock,
      price,
      vendor_name,
      category_name,
    } = newProductData;

    // If vendor_name is provided, find or create a vendor with the name
    if (vendor_name) {
      let vendor = await ProductVendor.findOne({
        where: { vendor_name },
      });
      if (!vendor) {
        vendor = await ProductVendor.create({ vendor_name });
      }
      // Update the product's vendor_id to the vendor's id
      product.vendor_id = vendor.id;
    }

    // If category_name is provided, find or create a category with the name
    if (category_name) {
      let category = await ProductCategory.findOne({
        where: { category_name },
      });
      if (!category) {
        category = await ProductCategory.create({ category_name });
      }
      // Update the product's category_id to the category's id
      product.category_id = category.id;
    }

    // Update the product's properties with the new data or keep the old data
    product.name = name || product.name;
    product.description = description || product.description;
    product.product_image = product_image || product.product_image;
    product.qty_in_stock = qty_in_stock || product.qty_in_stock;
    product.price = price || product.price;

    // Save the updated product
    await product.save();

    // Return the updated product
    return product;
  } catch (error) {
    throw error;
  }
};

// Delete Product by id
exports.deleteProduct = async (id) => {
  try {
    // Check if product exists
    const product = await Product.findByPk(id);
    if (!product) {
      throw new NotFoundError(`Product Not Found`);
    }
    // Delete the product
    await Product.destroy({ where: { id } });

    return product;
  } catch (error) {
    throw error;
  }
};

// Delete all Products
exports.deleteAllProducts = async () => {
  try {
    // Check if there are any products
    const productCount = await Product.count();
    if (productCount === 0) {
      throw new NotFoundError("No product(s) to delete");
    }

    // Delete all products
    await Product.destroy({
      where: {},
      truncate: false,
    });
    return {};
  } catch (error) {
    throw error;
  }
};

exports.getProductByName = async (product_name) => {
  try {
    // Find the product by product name
    const product = await Product.findOne({
      ...productDetails,
      where: {
        name: {
          [db.Sequelize.Op.iLike]: `%${product_name.toLowerCase()}%`,
        },
      },
    });

    if (!product) {
      throw new NotFoundError(`"${product_name}" not found`);
    }

    // Clean up the product data by only including the necessary information
    const cleanedUpProduct = cleanUpProductDataUtil([product])[0];

    return cleanedUpProduct;
  } catch (error) {
    throw error;
  }
};
