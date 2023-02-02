const express = require('express');
const { Client } = require('pg');
require('dotenv').config();

// Create an instance of express.
const app = express();
// Set the port to either the environment variable or 5000 if not set.
const port = process.env.PORT || 5000;

// Create an instance of a PostgreSQL client using information from environment variables.
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

// Connect to the PostgreSQL database.
client.connect()
  .then(() => console.log('Connected to the PostgreSQL database.'))
  .catch((err) => console.error('Error connecting', err.stack));


// Start the express server and log a message to the console.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// On process interruption, close the connection to the PostgreSQL database.
process.on('SIGINT', () => {
  client.end()
    .then(() => console.log('Disconnected from the PostgreSQL database.'))
    .catch((err) => console.error('Error disconnecting', err.stack));
});
