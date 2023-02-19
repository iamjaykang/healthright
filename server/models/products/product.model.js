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
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
      cost: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
      },
      productImage: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      productLive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return Product;
};
