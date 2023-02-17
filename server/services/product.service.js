const { NotFoundError } = require("../helpers/error.helper");
const db = require("../models");
const cleanUpProductDataHelper = require("../helpers/cleanUpProductData.helper");
const Product = db.products;
const ProductCategory = db.productCategories;
const ProductVendor = db.productVendors;
const { productDetails, productDetailsForAdmin } =
  require("../config/constants.config");

exports.createProduct = async (productData) => {
  const { vendorName, categoryName } = productData;

  try {
    // Check if vendor exists
    const vendor = await ProductVendor.findOne({ where: { vendorName } });
    if (!vendor) {
      // If vendor does not exist, create a new vendor
      const newVendor = await ProductVendor.create({ vendorName });
      productData.vendorId = newVendor.id;
    } else {
      // If vendor exists, use the existing vendor's id
      productData.vendorId = vendor.id;
    }

    // Check if category exists
    const category = await ProductCategory.findOne({
      where: { categoryName },
    });
    if (!category) {
      // If category does not exist, create a new category
      const newCategory = await ProductCategory.create({ categoryName });
      productData.categoryId = newCategory.id;
    } else {
      // If category exists, use the existing category's id
      productData.categoryId = category.id;
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
      ...productDetails(ProductVendor, ProductCategory),
      order: [["id", "ASC"]],
    });

    if (!products) {
      throw new NotFoundError(`Failed to retrieve all products`);
    }

    // Clean up the product data by only including the necessary information
    const cleanedUpProducts = cleanUpProductDataHelper(products);

    // Return the cleaned up product data
    return cleanedUpProducts;
  } catch (error) {
    throw error;
  }
};

// Retrieve all Products from the database along with vendor and category details.
exports.findAllProductsForAdmin = async () => {
  try {
    // Find all products and include the related vendor and category information
    const products = await Product.findAll({
      ...productDetailsForAdmin(ProductVendor, ProductCategory),
      order: [["id", "ASC"]],
    });

    if (!products) {
      throw new NotFoundError(`Failed to retrieve all products`);
    }

    // Return the product data
    return products;
  } catch (error) {
    throw error;
  }
};

// Get all products by Vendor
exports.getProductsByVendor = async (vendorName) => {
  console.log(vendorName)
  try {
    // Find the vendor by name
    const vendor = await ProductVendor.findOne({
      where: {
        vendorName: {
          [db.Sequelize.Op.iLike]: vendorName,
        },
      },
    });

    if (!vendor) {
      throw new NotFoundError(`Vendor not found`);
    }

    // Get all the products for the found vendor
    const products = await Product.findAll({
      ...productDetails(ProductVendor, ProductCategory),
      where: {
        vendorId: {
          [db.Sequelize.Op.eq]: vendor.id,
        },
      },
    });

    if (!products) {
      throw new NotFoundError(`No product(s) found for the vendor`);
    }

    // Clean up the product data by only including the necessary information
    const cleanedUpProducts = cleanUpProductDataHelper(products);

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
        categoryName: {
          [db.Sequelize.Op.iLike]: categoryName,
        },
      },
    });

    if (!category) {
      throw new NotFoundError(`Category not found`);
    }

    // Get all the products for the found category
    const products = await Product.findAll({
      ...productDetails(ProductVendor, ProductCategory),
      where: {
        categoryId: {
          [db.Sequelize.Op.eq]: category.id,
        },
      },
    });

    if (!products) {
      throw new NotFoundError(`No product(s) found for the category`);
    }

    // Clean up the product data by only including the necessary information
    const cleanedUpProducts = cleanUpProductDataHelper(products);

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
      ...productDetails(ProductVendor, ProductCategory),
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

    const cleanedUpProducts = cleanUpProductDataHelper(products);

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
      productImage,
      qtyInStock,
      price,
      vendorName,
      categoryName,
    } = newProductData;

    // If vendorName is provided, find or create a vendor with the name
    if (vendorName) {
      let vendor = await ProductVendor.findOne({
        where: { vendorName },
      });
      if (!vendor) {
        vendor = await ProductVendor.create({ vendorName });
      }
      // Update the product's vendorId to the vendor's id
      product.vendorId = vendor.id;
    }

    // If categoryName is provided, find or create a category with the name
    if (categoryName) {
      let category = await ProductCategory.findOne({
        where: { categoryName },
      });
      if (!category) {
        category = await ProductCategory.create({ categoryName });
      }
      // Update the product's categoryId to the category's id
      product.categoryId = category.id;
    }

    // Update the product's properties with the new data or keep the old data
    product.name = name || product.name;
    product.description = description || product.description;
    product.productImage = productImage || product.productImage;
    product.qtyInStock = qtyInStock || product.qtyInStock;
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

exports.getProductByName = async (productName) => {
  try {
    // Find the product by product name
    const product = await Product.findOne({
      ...productDetails(ProductVendor, ProductCategory),
      where: {
        name: {
          [db.Sequelize.Op.iLike]: `%${productName.toLowerCase()}%`,
        },
      },
    });

    if (!product) {
      throw new NotFoundError(`"${productName}" not found`);
    }

    // Clean up the product data by only including the necessary information
    const cleanedUpProduct = cleanUpProductDataHelper([product])[0];

    return cleanedUpProduct;
  } catch (error) {
    throw error;
  }
};
