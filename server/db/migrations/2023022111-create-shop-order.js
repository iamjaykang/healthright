"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("shopOrders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      shippingAddressId: {
        type: Sequelize.INTEGER,
        references: {
          model: "addresses",
          key: "id",
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      shippingMethodId: {
        type: Sequelize.INTEGER,
        references: {
          model: "shippingMethods",
          key: "id",
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      orderTotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      orderStatusId: {
        type: Sequelize.INTEGER,
        references: {
          model: "orderStatuses",
          key: "id",
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
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
    await queryInterface.dropTable("shopOrders");
  },
};
