const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./products/product.model")(sequelize, DataTypes, Model);
db.productCategories = require("./products/productCategory.model")(sequelize, DataTypes, Model);
db.productVendors = require("./products/productVendor.model")(sequelize, DataTypes, Model);

module.exports = db;
