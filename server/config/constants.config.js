const productDetails = (ProductVendor, ProductCategory) => ({
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

module.exports = productDetails;
