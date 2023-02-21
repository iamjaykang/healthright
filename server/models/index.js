const dbConfig = require("../config/db.config");
const env = process.env.NODE_ENV || "development";
const { Sequelize, DataTypes } = require("sequelize");
const defineAssociations = require("./associations");

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

// products
db.products = require("./products/product.model")(sequelize, DataTypes);
db.productCategories = require("./products/productCategory.model")(
  sequelize,
  DataTypes
);
db.productVendors = require("./products/productVendor.model")(
  sequelize,
  DataTypes
);

// users
db.users = require("./users/user.model")(sequelize, DataTypes);
db.userAddresses = require("./users/userAddress.model")(sequelize,DataTypes)
db.addresses = require('./users/addresses/address.model')(sequelize,DataTypes)
db.countries = require('./users/countries/country.model')(sequelize,DataTypes)

// orders

db.shopOrders = require('./shopOrders/shopOrder.model')(sequelize,DataTypes);
db.orderStatuses = require('./shopOrders/orderStatus.model')(sequelize,DataTypes);
db.orderLines = require('./shopOrders/orderLine.model')(sequelize,DataTypes);
db.shippingMethods = require('./shopOrders/shippingMethod.model')(sequelize,DataTypes);


defineAssociations(db);

module.exports = db;
