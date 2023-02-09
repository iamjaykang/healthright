// Utility function to clean up product data
module.exports = function cleanUpProductData(products) {
  return products.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    productImage: product.productImage,
    vendor: product.vendor.vendorName,
    category: product.category.categoryName,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
  }));
};
