"use strict";

const productService = require("../../services/product.service");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("productCategories", [
      {
        categoryName: "Colostrum",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "Propolis",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "Collagen",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "Multi Vitamin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "Green Mussels",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "Joint Care",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "Eye Care",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "Immune Support",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryName: "Cissus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("productVendors", [
      {
        vendorName: "PaiOra",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vendorName: "kuku",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vendorName: "Nu.wise",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vendorName: "Nzpurehealth",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("products", [
      {
        name: "Nzpurehealth Propolis 100 capsules",
        description: "Nzpurehealth Propolis 100 capsules",
        productImage:
          "https://i.ibb.co/hx0kczV/N-680001-nzpurehealth-propolis-100c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryId: 2,
        vendorId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nzpurehealth Bovine Colostrum 100 capsules",
        description: "Nzpurehealth Bovine Colostrum 100 capsules",
        productImage:
          "https://i.ibb.co/rvZ4b5S/N-680003-NP-Bovine-Colostrum-100c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryId: 1,
        vendorId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nzpurehealth Marine Collagen 60 capsules",
        description: "Nzpurehealth Marine Collagen 60 capsules",
        productImage:
          "https://i.ibb.co/3RnqzkJ/N-680004-Marine-collagen-60c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryId: 3,
        vendorId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nzpurehealth Multivitamin Plus 1500mg 60 capsules",
        description: "Nzpurehealth Multivitamin Plus 1500mg 60 capsules",
        productImage:
          "https://i.ibb.co/6PRxCX6/N-680005-Multivitamin-Plus-1500mg-60c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryId: 4,
        vendorId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nzpurehealth Pure Pets Green Lipped Mussel 120 capsules",
        description: "Nzpurehealth Pure Pets Green Lipped Mussel 120 capsules",
        productImage:
          "https://i.ibb.co/4ZLZD7P/N-680006-NP-Pure-pets-green-lipped-mussel-120c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryId: 5,
        vendorId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: 25,
        vendorId: 2,
        categoryId: 5,
        qtyInStock: 50,
        name: "kuku GLM 12500 45c",
        description: "kuku GLM 12500 45c",
        productImage:
          "https://i.ibb.co/4fd2frP/Kuku-GLM-Oil-Range-Blister-12500-Maintenance-45-Caps-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: 25,
        productImage: "https://i.ibb.co/t85xhDb/glm-20250.jpg",
        name: "kuku GLM 20250",
        description: "kuku GLM 20250",
        vendorId: 2,
        categoryId: 5,
        qtyInStock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vendorId: 2,
        categoryId: 5,
        qtyInStock: 50,
        price: 25,
        name: "kuku GLM27000 45c",
        description: "kuku GLM27000 45c",
        productImage: "https://i.ibb.co/x5y4nV5/kuku-glm27000-45.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: 25,
        productImage:
          "https://i.ibb.co/r0KkWHT/KUKU-Mussel-Oil-37000-45c-4.jpg",
        vendorId: 2,
        categoryId: 5,
        qtyInStock: 50,
        name: "kuku GLM37000 45c",
        description: "kuku GLM37000 45c",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "kuku GLM37000 combo",
        description: "kuku GLM37000 combo",
        price: 25,
        vendorId: 2,
        categoryId: 5,
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/QNwXhxL/Kuku-Box-and-Bottle-with-caps-and-blister-card-1000x1000px.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "kuku pet GLM",
        description: "kuku pet GLM",
        productImage:
          "https://i.ibb.co/KwjYXrq/Kuku-Pet-Health-Care-150ml-White-Bottle-v4-x1000.jpg",
        vendorId: 2,
        categoryId: 5,
        qtyInStock: 50,
        price: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productImage:
          "https://i.ibb.co/PM8hmG8/N-650003-Joint-plus-11000mg-90c-1.jpg",
        price: 25,
        name: "Nu.wise Nu.Joint",
        vendorId: 3,
        categoryId: 6,
        qtyInStock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vendorId: 3,
        categoryId: 7,
        qtyInStock: 50,
        name: "Nu.wise Nu.Eyes",
        description: "Nu.wise Nu.Eyes",
        price: 25,
        productImage: "https://i.ibb.co/hZjLcs8/N-650006-Nu-colo-300-2-2.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: 25,
        name: "Nu.wise Nu.Colostrum",
        description: "Nu.wise Nu.Colostrum",
        vendorId: 3,
        categoryId: 8,
        qtyInStock: 50,
        productImage: "https://i.ibb.co/Fb4VXNy/N-650006-Nu-colo-300-5.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nu.wise Nu.Immunex Propolis",
        description: "Nu.wise Nu.Immunex Propolis",
        vendorId: 3,
        categoryId: 2,
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/vPbvKLZ/N-650018-Nu-Wise-Nu-Immunex-Propolis-120caps.jpg",
        price: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vendorId: 3,
        categoryId: 9,
        qtyInStock: 50,
        price: 25,
        productImage:
          "https://i.ibb.co/HKBWRsM/N-650019-Nu-Wise-Nu-Slim-Cissus-90tabs.jpg",
        name: "Nu.wise Nu.Slim Cissus",
        description: "Nu.wise Nu.Slim Cissus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productImage:
          "https://i.ibb.co/bz3JVPV/P-100001-detail-piora-colo-plus-300t-1.jpg",
        vendorId: 1,
        categoryId: 8,
        qtyInStock: 50,
        price: 25,
        name: "PaiOra Colo Plus Colostrum 300 tablets",
        description: "PaiOra Colo Plus Colostrum 300 tablets",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PaiOra Colo Deer Placenta 2500 120 capsules",
        description: "PaiOra Colo Deer Placenta 2500 120 capsules",
        vendorId: 1,
        categoryId: 8,
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/fdswLnF/P-100004-Pai-Ora-Deer-Placenta-2500-120c-v2-1.jpg",
        price: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vendorId: 1,
        categoryId: 2,
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/k1q0THk/P-100009-Pai-Ora-Propolis-60s-1.jpg",
        price: 25,
        name: "PaiOra Propolis 7000 60 capsules",
        description: "PaiOra Propolis 7000 60 capsules",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: 25,
        name: "PaiOra Propolis 7000 120 capsules",
        description: "PaiOra Propolis 7000 120 capsules",
        vendorId: 1,
        categoryId: 2,
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/p1QxCJ0/P-1000010-Pai-Ora-Propolis-120s-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productImage: "https://i.ibb.co/9tgmcDH/Pai-Ora-Cissus-90tab.jpg",
        vendorId: 1,
        categoryId: 9,
        qtyInStock: 50,
        name: "PaiOra Cissus 90 tablets",
        description: "PaiOra Cissus 90 tablets",
        price: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productImage:
          "https://i.ibb.co/Mpjvwh5/Paiora-GLM6500-Condroitin-300c-1.jpg",
        price: 25,
        vendorId: 1,
        categoryId: 6,
        qtyInStock: 50,
        name: "PaiOra GLM 6500 Condroitin 300 capsules",
        description: "PaiOra GLM 6500 Condroitin 300 capsules",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        vendorId: 1,
        categoryId: 8,
        qtyInStock: 50,
        name: "PaiOra Goat Colo Protein Powder 250g",
        description: "PaiOra Goat Colo Protein Powder 250g",
        productImage:
          "https://i.ibb.co/F3zn5kL/Premiun-Goat-Colo-protein-Powder-250g-1.jpg",
        price: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // const productData = [

    // ];

    // for (const data of productData) {
    //   await productService.createProduct(data);
    // }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("products", null, {});
    await queryInterface.bulkDelete("productCategories", null, {});
    await queryInterface.bulkDelete("productVendors", null, {});
  },
};
