"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("users", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      emailAddress: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("countries", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      countryName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("addresses", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      unitNumber: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      streetNumber: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      addressLine1: {
        type: DataTypes.STRING(90),
        allowNull: false,
      },
      addressLine2: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
      postalCode: {
        type: DataTypes.STRING(32),
        allowNull: false,
      },
      countryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "countries",
          key: "id",
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });

    await queryInterface.createTable("userAddresses", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id",
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      addressId: {
        type: DataTypes.INTEGER,
        references: {
          model: "addresses",
          key: "id",
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
      },
      isDefault: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("userAddresses");
    await queryInterface.dropTable("addresses");
    await queryInterface.dropTable("countries");
    await queryInterface.dropTable("users");
  },
};
