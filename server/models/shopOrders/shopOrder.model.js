const addressModel = require("../users/addresses/address.model");
const userModel = require("../users/user.model");
const orderStatusModel = require("./orderStatus.model");
const shippingMethodModel = require("./shippingMethod.model");

module.exports = (sequelize, DataTypes) => {
  const shopOrder = sequelize.define(
    "shopOrder",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: userModel(sequelize, DataTypes),
          key: "id",
        },
      },
      shippingAddressId: {
        type: DataTypes.INTEGER,
        references: {
          model: addressModel(sequelize, DataTypes),
          key: "id",
        },
      },
      shippingMethodId: {
        type: DataTypes.INTEGER,
        references: {
          model: shippingMethodModel(sequelize, DataTypes),
          key: "id",
        },
      },
      orderTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      orderStatusId: {
        type: DataTypes.INTEGER,
        references: {
          model: orderStatusModel(sequelize, DataTypes),
          key: "id",
        },
      },
    },
    {
      timestamps: true,
    }
  );
  return shopOrder;
};
