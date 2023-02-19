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
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      streetNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      addressLine1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressLine2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING,
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
