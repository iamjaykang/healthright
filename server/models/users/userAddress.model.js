const addressModel = require("./addresses/address.model");
const userModel = require("./user.model");

module.exports = (sequelize, DataTypes) => {
  const UserAddress = sequelize.define(
    "userAddress",
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
      addressId: {
        type: DataTypes.INTEGER,
        references: {
          model: addressModel(sequelize, DataTypes),
          key: "id",
        },
      },
      isDefault: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return UserAddress;
};
