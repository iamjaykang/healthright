const productCategoryModel = require("./productCategory.model");
const productVendorModel = require("./productVendor.model");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vendor_id: {
        type: DataTypes.INTEGER,
        references: {
          model:productVendorModel(sequelize, DataTypes),
          key: "id",
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: productCategoryModel(sequelize, DataTypes),
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
      qty_in_stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      product_image: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
  Product.belongsTo(productVendorModel(sequelize, DataTypes), {
    foreignKey: "vendor_id",
    as: "vendor",
  });
  Product.belongsTo(productCategoryModel(sequelize, DataTypes), {
    foreignKey: "category_id",
    as: "category",
  });
  return Product;
};