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
      throw new Error(`Vendor with name "${vendorName}" not found`);
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
      throw new Error(`Category with name "${categoryName}" not found`);
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
      throw new Error(`Failed to search product(s)`);
    }

    const cleanedUpProducts = cleanUpProductDataUtil(products);

    return cleanedUpProducts;
  } catch (error) {
    throw error;
  }
};
