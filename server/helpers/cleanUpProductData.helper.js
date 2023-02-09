// Utility function to clean up product data
module.exports = function cleanUpProductData(products) {
  return products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    productImage: product.product_image,
    vendor: product.vendor.vendor_name,
    category: product.category.category_name,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  }));
};
