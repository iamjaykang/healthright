"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orderLines", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      productItemId: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: "shopOrders",
          key: "id",
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orderLines");
  },
};
