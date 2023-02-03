module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define("product_category", {
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
        timestamps: true,
      }
    );
    return ProductCategory;
  };
  