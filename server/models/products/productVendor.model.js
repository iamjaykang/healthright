module.exports = (sequelize, DataTypes, Model) => {

  class ProductVendor extends Model {}

  ProductVendor.init(
    {
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
      sequelize,
      modelName: "product_vendor",
    }
  );

  return ProductVendor;
};
