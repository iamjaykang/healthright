module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define("productCategory", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        categoryName: {
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
  