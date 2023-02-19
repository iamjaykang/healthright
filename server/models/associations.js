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
};

module.exports = defineAssociations;
