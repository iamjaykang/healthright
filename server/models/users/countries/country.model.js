module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      countryName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  return Country;
};
