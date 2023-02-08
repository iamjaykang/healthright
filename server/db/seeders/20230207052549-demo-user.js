"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userData = [
      {
        id: 'user1',
        display_name: 'John Doe',
        email: 'johndoe@example.com',
        is_admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'user2',
        display_name: 'Jane Doe',
        email: 'janedoe@example.com',
        is_admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'user3',
        display_name: 'Jim Smith',
        email: 'jimsmith@example.com',
        is_admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    for (const data of userData) {
      await queryInterface.bulkInsert("users", [data]);
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
