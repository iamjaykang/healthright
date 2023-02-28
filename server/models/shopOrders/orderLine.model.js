const productModel = require("../products/product.model");
const shopOrderModel = require("./shopOrder.model");

module.exports = (sequelize, DataTypes) => {
  const orderLine = sequelize.define(
    "orderLine",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      productItemId: {
        type: DataTypes.INTEGER,
        references: {
          model: productModel(sequelize, DataTypes),
          key: "id",
        },
      },
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: shopOrderModel(sequelize, DataTypes),
          key: "id",
        },
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return orderLine;
};
