const defineAssociations = (db) => {
  // product associations
  db.products.belongsTo(db.productVendors, {
    foreignKey: "vendorId",
    as: "vendor",
  });
  db.products.belongsTo(db.productCategories, {
    foreignKey: "categoryId",
    as: "category",
  });

  // user associations
  db.users.hasMany(db.userAddresses, { foreignKey: "userId" });
  db.userAddresses.belongsTo(db.users, { foreignKey: "userId" });

  db.userAddresses.belongsTo(db.addresses, { foreignKey: "addressId" });
  db.addresses.hasMany(db.userAddresses, { foreignKey: "addressId" });

  db.addresses.belongsTo(db.countries, { foreignKey: "countryId" });
  db.countries.hasMany(db.addresses, { foreignKey: "countryId" });

  // order associations

  db.shopOrders.belongsTo(db.users, { foreignKey: "userId" });
  db.users.hasMany(db.shopOrders, { foreignKey: "userId" });

  db.shopOrders.belongsTo(db.addresses, { foreignKey: "shippingAddressId" });
  db.addresses.hasMany(db.shopOrders, { foreignKey: "shippingAddressId" });

  db.shippingMethods.hasMany(db.shopOrders, { foreignKey: "shippingMethodId" });
  db.shopOrders.belongsTo(db.shippingMethods, {
    foreignKey: "shippingMethodId",
  });

  db.orderStatuses.hasMany(db.shopOrders, { foreignKey: "orderStatusId" });
  db.shopOrders.belongsTo(db.orderStatuses, { foreignKey: "orderStatusId" });

  db.orderLines.belongsTo(db.products, { foreignKey: "productItemId" });
  db.products.hasMany(db.orderLines, { foreignKey: "productItemId" });
};

module.exports = defineAssociations;
