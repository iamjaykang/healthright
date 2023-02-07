// Utility function to clean up product data
module.exports = function cleanUpProductData(products) {
  return products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    product_image: product.product_image,
    vendor: product.vendor.vendor_name,
    category: product.category.category_name,
    created_at: product.createdAt,
    updated_at: product.updatedAt,
  }));
};
