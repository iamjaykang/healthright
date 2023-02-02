require("dotenv").config();
const { Sequelize } = require("sequelize");

const client = () => {
  const hostName = process.env.DB_HOST;
  const userName = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_DATABASE;
  const dialect = process.env.DB_DIALECT;
  const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    dialect: dialect,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  return db;
};

module.exports = {
  client,
};
