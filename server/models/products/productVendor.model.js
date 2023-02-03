module.exports = (sequelize, DataTypes) => {
    const ProductVendor = sequelize.define("product_vendor", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        vendor_name: {
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
  