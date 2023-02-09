module.exports = (sequelize, DataTypes) => {
  const productCategoryModel = require("./productCategory.model")(
    sequelize,
    DataTypes
  );
  const productVendorModel = require("./productVendor.model")(
    sequelize,
    DataTypes
  );
  const Product = sequelize.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vendorId: {
        type: DataTypes.INTEGER,
        references: {
          model: productVendorModel,
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: productCategoryModel,
          key: "id",
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      qtyInStock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      productImage: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
  Product.belongsTo(productVendorModel, {
    foreignKey: "vendorId",
    as: "vendor",
  });
  Product.belongsTo(productCategoryModel, {
    foreignKey: "categoryId",
    as: "category",
  });
  return Product;
};
