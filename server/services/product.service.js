const db = require("../models");
const Product = db.products;
const ProductCategory = db.productCategories;
const ProductVendor = db.productVendors;

exports.createProduct = async (productData) => {
  const { name, description, product_image, vendor_name, category_name, price, qty_in_stock } =
  productData;

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
