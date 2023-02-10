const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/product.route");
const userRoutes = require("./routes/user.route");
const paymentRoute = require("./routes/payment.route");
const firebaseRoutes = require("./routes/firebase.route");
var cookieParser = require('cookie-parser')

// Create an instance of express.
const app = express();

// Set the port to either the environment variable or 5000 if not set.
const port = process.env.PORT || 5000;

let corsOptions = {
  origin: [process.env.CORS_ORIGIN],
  optionsSuccessStatus: 200,
};

process.env.NODE_ENV === "production"
  ? app.use(cors(corsOptions))
  : app.use(cors());

app.use(cookieParser())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Use the firebaseRoutes for handling API calls for custom user claims
app.use("/api/firebase", firebaseRoutes);

app.use("/api/payment", paymentRoute);

// endpoint handlers for the product-related functionality
app.use("/api/products", productRoutes);

// endpoint handlers for the user-related functionality
app.use("/api/users", userRoutes);

const db = require("./models");
const errorHandler = require("./middleware/errorHandler.middleware");

if (process.env.NODE_ENV !== "production") {
  db.sequelize.sync({ force: false }).then(() => {
    console.log("re-sync db.");
  });
}

app.get("/", (req, res) => {
  res.send("API is running");
});

// Add the error handler middleware as the last middleware
app.use(errorHandler);

// Start the express server and log a message to the console.
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
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
