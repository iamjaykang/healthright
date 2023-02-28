const productDetails = (ProductVendor, ProductCategory) => ({
  // Only select the necessary attributes from the products table
  attributes: [
    "id",
    "name",
    "description",
    "price",
    "productImage",
    "productLive",
    "createdAt",
    "updatedAt",
  ],
  include: [
    // Include the related vendor information, using the alias "vendor"
    {
      model: ProductVendor,
      as: "vendor",
      attributes: ["vendorName"],
    },
    // Include the related category information, using the alias "category"
    {
      model: ProductCategory,
      as: "category",
      attributes: ["categoryName"],
    },
  ],
});

const productDetailsForAdmin = (ProductVendor, ProductCategory) => ({
  // Only select the necessary attributes from the products table
  attributes: [
    "id",
    "name",
    "description",
    "price",
    "cost",
    "qtyInStock",
    "productImage",
    "productLive",
    "createdAt",
    "updatedAt",
  ],
  include: [
    // Include the related vendor information, using the alias "vendor"
    {
      model: ProductVendor,
      as: "vendor",
      attributes: ["vendorName", "id"],
    },
    // Include the related category information, using the alias "category"
    {
      model: ProductCategory,
      as: "category",
      attributes: ["categoryName", "id"],
    },
  ],
});

const userDetails = (UserAddress, Address, Country) => ({
  // Only select the necessary attributes from the users table
  attributes: [
    "id",
    "firstName",
    "lastName",
    "emailAddress",
    "createdAt",
    "updatedAt",
  ],
  include: [
    {
      model: UserAddress,
      include: [{ model: Address, include: [{ model: Country }] }],
    },
  ],
});

const shopOrderDetails = (
  User,
  Address,
  OrderStatus,
  ShippingMethod,
  OrderLine,
  Product,
  Country
) => ({
  // Only select the necessary attributes from the products table
  attributes: ["id", "orderTotal", "createdAt", "updatedAt"],
  include: [
    {
      model: User,
      attributes: ["id", "firstName", "lastName", "emailAddress"]
    },
    {
      model: Address,
      as: "shippingAddress",
      attributes: ["id", "unitNumber", "streetNumber", "addressLine1", "addressLine2", "city","region", "postalCode"],
      include: [{model: Country, attributes: ["id", "countryName"]}]
    },
    {
      model: OrderStatus,
      attributes: ["id", "status"]
    },
    {
      model: ShippingMethod,
      attributes: ["id", "name", "price"]
    },
    {
      model: OrderLine,
      attributes: ["id", "qty", "price"],
      include: [{ model: Product, as: 'orderItem', attributes: ["id","name"] }],
    },
  ],
});

module.exports = {
  productDetails,
  productDetailsForAdmin,
  userDetails,
  shopOrderDetails,
};
