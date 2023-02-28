"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("orderStatuses", [
      {
        status: "Processing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: "Shipped",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("shippingMethods", [
      {
        name: "Standard Shipping",
        price: 5.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Express Shipping",
        price: 10.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("shopOrders", [
      {
        userId: 1,
        shippingAddressId: 1,
        shippingMethodId: 1,
        orderTotal: 75.0,
        orderStatusId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        shippingAddressId: 2,
        shippingMethodId: 2,
        orderTotal: 75.0,
        orderStatusId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("orderLines", [
      {
        productItemId: 1,
        orderId: 1,
        qty: 2,
        price: 25.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productItemId: 2,
        orderId: 1,
        qty: 1,
        price: 25.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productItemId: 3,
        orderId: 2,
        qty: 1,
        price: 25.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productItemId: 4,
        orderId: 2,
        qty: 2,
        price: 25.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("shippingMethods", null, {});
    await queryInterface.bulkDelete("orderStatuses", null, {});
    await queryInterface.bulkDelete("shopOrders", null, {});
    await queryInterface.bulkDelete("orderLines", null, {});

  },
};
