module.exports = (sequelize, DataTypes, Model) => {
  class ProductCategory extends Model {}

  ProductCategory.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "product_category",
    }
  );

  return ProductCategory;
};
