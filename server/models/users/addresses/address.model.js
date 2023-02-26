const countryModel = require("../countries/country.model");

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "address",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      unitNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      streetNumber: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      addressLine1: {
        type: DataTypes.STRING(90),
        allowNull: false,
      },
      addressLine2: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      countryId: {
        type: DataTypes.INTEGER,
        references: {
          model: countryModel(sequelize, DataTypes),
          key: "id",
        },
      },
    },
    {
      timestamps: true,
    }
  );
  return Address;
};
