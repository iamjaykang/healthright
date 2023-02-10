# Healthright E-Commerce Website

## Live

Live: https://dynamic-wisp-ef7e88.netlify.app

## Introduction

This project is an e-commerce website built using React JS, Firebase, Sequelize ORM, styled with SCSS, and state management by Redux. The website allows users to browse and purchase products, as well as manage their shopping carts. The project also integrates with Google Dialogflow for conversational user experience.

### Technologies Used

- React JS
- Firebase Auth
- Postgres SQL
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

## Usage

1. Browse products by navigating through the brands.

2. Add items to your shopping cart to proceed to checkout.

3. Log in or sign up.

4. Review and modify your cart, then proceed to payment.

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