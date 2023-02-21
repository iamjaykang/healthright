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
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      shippingAddressId: {
        type: DataTypes.INTEGER,
        references: {
          model: "addresses",
          key: "id",
        },
      },
      shippingMethodId: {
        type: DataTypes.INTEGER,
        references: {
          model: "shippingMethods",
          key: "id",
        },
      },
      orderTotal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      orderStatusId: {
        type: DataTypes.INTEGER,
        references: {
          model: "orderStatuses",
          key: "id",
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
