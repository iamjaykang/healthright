module.exports = (sequelize, DataTypes) => {
  const userModel = require("./user.model")(sequelize, DataTypes);
  const addressModel = require("./addresses/address.model")(
    sequelize,
    DataTypes
  );
  const UserAddress = sequelize.define(
    "userAddress",
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: userModel,
          key: "id",
        },
      },
      addressId: {
        type: DataTypes.INTEGER,
        references: {
          model: addressModel,
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
