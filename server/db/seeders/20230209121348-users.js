"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("countries", [
      {
        countryName: "United States",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { countryName: "Canada", createdAt: new Date(), updatedAt: new Date() },
      { countryName: "Mexico", createdAt: new Date(), updatedAt: new Date() },
    ]);
    // Adding addresses
    await queryInterface.bulkInsert("addresses", [
      {
        unitNumber: 100,
        streetNumber: 123,
        addressLine1: "1 Main St",
        addressLine2: "Apt 100",
        city: "San Francisco",
        region: "California",
        postalCode: "94111",
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unitNumber: null,
        streetNumber: 321,
        addressLine1: "2 Main St",
        addressLine2: "Apt 200",
        city: "Los Angeles",
        region: "California",
        postalCode: "90210",
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unitNumber: 200,
        streetNumber: 456,
        addressLine1: "3 Main St",
        addressLine2: "Apt 300",
        city: "Toronto",
        region: "Ontario",
        postalCode: "M1T 2T9",
        countryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Adding users
    await queryInterface.bulkInsert("users", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@example.com",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Admin",
        lastName: "User",
        email: "admin@example.com",
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Adding userAddresses
    await queryInterface.bulkInsert("userAddresses", [
      {
        userId: 1,
        addressId: 1,
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        addressId: 2,
        isDefault: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        userId: 2,
        addressId: 3,
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
