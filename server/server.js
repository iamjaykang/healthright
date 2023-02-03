const express = require("express");
const { client } = require("./config/db.config");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/product.route");

// Create an instance of express.
const app = express();

// Set the port to either the environment variable or 5000 if not set.
const port = process.env.PORT || 5000;

var corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// endpoint handlers for the product-related functionality
app.use("/api/products", productRoutes);

const db = require("./models");

if (process.env.NODE_ENV !== "production") {
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
}

// Start the express server and log a message to the console.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("API is running..");
});

// On process interruption, close the connection to the database and exit the process.
process.on("SIGINT", () => {
  db.sequelize
    .close()
    .then(() => {
      console.log(`Disconnected from the database.`);
      process.exit();
    })
    .catch((err) => {
      console.error("Error disconnecting", err.stack);
      process.exit(1);
    });
});
