# Healthright E-Commerce Website

## Live

Live: https://healthrightnz.com/

## Introduction

This project is an e-commerce website built using React TypeScript, Node.Js, Express.Js, Firebase Auth, Postgres SQL Sequelize ORM, styled with SCSS, and state management by Redux. The website allows users to browse and purchase products, as well as manage their shopping carts. The project also integrates with Google Dialogflow for conversational user experience. The website also has an admin route that allows authenticated users with admin privileges to perform CRUD (Create, Read, Update, Delete) operations for products and customers. This functionality is intended for website administrators to manage the products and customers available on the site. The admin route can only be accessed by users with valid admin credentials.

### Technologies & Tools Used

- React TypeScript
- Firebase Client SDK
- Firebase Admin SDK
- Postgres SQL
- Chart.js
- Node JS
- Express JS
- SCSS
- Sequelize ORM
- Redux
- Google Dialogflow

### Installation

### Clone
1. Clone the repository:
    ```
    git clone https://github.com/iamjaykang/healthright
    ```
### Client

1. Install the client dependencies:
    ```
    cd healthright/client
    npm install
    ```

2. Start the development server:
    ```
    npm start
    ```
### Server

1. Install the server dependencies:
    ```
    cd healthright/server
    npm install
    ```

2. Start the server:
    ```
    npm start
    ```

## Features

- Product display
- User authentication
- Shopping cart management
- Search and sort by vendors and categories
- Admin route to make CRUD operations for products and customers
- Display data in a chart using Chart.js

## Usage

1. Browse products by navigating through the brands.

2. Add items to your shopping cart to proceed to checkout.

3. Log in or sign up.

4. Review and modify your cart, then proceed to payment.

5. Use the search and sort functions to find products by vendor or category.

6. Access the admin route to manage products and customers.

## Environment Variables

The project requires the following environment variables to be set:

### client
- REACT_APP_FIREBASE_API_KEY
- REACT_APP_FIREBASE_AUTH_DOMAIN
- REACT_APP_FIREBASE_PROJECT_ID
- REACT_APP_FIREBASE_STORAGE_BUCKET
- REACT_APP_FIREBASE_MESSAGING_SENDER_ID
- REACT_APP_FIREBASE_APP_ID
- REACT_APP_STRIPE_PUBLISHABLE_KEY
- REACT_APP_API_URL

### server
- PORT
- DEV_DB_HOST
- DEV_DB_USER
- DEV_DB_PASSWORD
- DEV_DB_DATABASE
- DB_DIALECT
- DB_PORT
- CI_DB_USERNAME
- CI_DB_PASSWORD
- CI_DB_NAME
- CI_DB_HOST
- PROD_DB_PORT
- PROD_DB_USERNAME
- PROD_DB_PASSWORD
- PROD_DB_NAME
- PROD_DB_HOST
- CORS_ORIGIN
- STRIPE_SECRET_KEY
- FIREBASE_TYPE
- FIREBASE_PROJECT_ID
- FIREBASE_PRIVATE_KEY_ID
- FIREBASE_PRIVATE_KEY
- FIREBASE_CLIENT_EMAIL
- FIREBASE_CLIENT_ID
- FIREBASE_AUTH_URI
- FIREBASE_TOKEN_URI
- FIREBASE_AUTH_PROVIDER_X509_CERT_URL
- FIREBASE_CLIENT_X509_CERT_URL
- FIREBASE_DB_URL