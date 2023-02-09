module.exports = (sequelize, DataTypes) => {
    const ProductVendor = sequelize.define("productVendor", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        vendorName: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        timestamps: true,
      }
    );
    return ProductVendor;
  };
  