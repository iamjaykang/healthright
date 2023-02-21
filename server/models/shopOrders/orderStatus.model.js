module.exports = (sequelize, DataTypes) => {
  const orderStatus = sequelize.define(
    "orderStatus",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
  return orderStatus;
};
