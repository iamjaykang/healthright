const express = require("express");
const { client } = require("./config/db.config");
const db = client();

// Create an instance of express.
const app = express();
// Set the port to either the environment variable or 5000 if not set.
const port = process.env.PORT || 5000;

const dialect = process.env.DB_DIALECT;

// Connect to the database.
db.sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to the ${dialect} database.`);
  })
  .catch((err) => {
    console.error("Error connecting: ", err.stack);
  });

// Start the express server and log a message to the console.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// On process interruption, close the connection to the database.
process.on("SIGINT", () => {
  db.sequelize
    .close()
    .then(() => {
      console.log(`Disconnected from the ${dialect} database.`);
      process.exit();
    })
    .catch((err) => {
      console.error("Error disconnecting", err.stack);
      process.exit(1);
    });
});
