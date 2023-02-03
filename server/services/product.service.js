const db = require("../models");
const cleanUpProductDataUtil = require("../utils/cleanUpProductData.util");
const Product = db.products;
const ProductCategory = db.productCategories;
const ProductVendor = db.productVendors;

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
      // Only select the necessary attributes from the products table
      attributes: [
        "id",
        "name",
        "description",
        "price",
        "product_image",
        "createdAt",
        "updatedAt",
      ],
      include: [
        // Include the related vendor information, using the alias "vendor"
        {
          model: ProductVendor,
          as: "vendor",
          attributes: ["vendor_name"],
        },
        // Include the related category information, using the alias "category"
        {
          model: ProductCategory,
          as: "category",
          attributes: ["category_name"],
        },
      ],
    });

    // Clean up the product data by only including the necessary information
    const cleanedUpProducts = cleanUpProductDataUtil(products);

    // Return the cleaned up product data
    return cleanedUpProducts;
  } catch (error) {
    throw error;
  }
};
