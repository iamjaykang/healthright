const dbConfig = require("../config/db.config");
const env = process.env.NODE_ENV || "development";
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig[env].database,
  dbConfig[env].username,
  dbConfig[env].password,
  {
    host: dbConfig[env].host,
    dialect: dbConfig[env].dialect,
    port: dbConfig[env].port,
    pool: {
      max: dbConfig[env].pool.max,
      min: dbConfig[env].pool.min,
      acquire: dbConfig[env].pool.acquire,
      idle: dbConfig[env].pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./products/product.model")(sequelize, DataTypes);
db.productCategories = require("./products/productCategory.model")(
  sequelize,
  DataTypes
);
db.productVendors = require("./products/productVendor.model")(
  sequelize,
  DataTypes
);
db.users = require("./users/user.model")(sequelize, DataTypes);

module.exports = db;
