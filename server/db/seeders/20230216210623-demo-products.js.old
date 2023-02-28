"use strict";

const productService = require("../../services/product.service");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const productData = [
      {
        name: "Nzpurehealth Propolis 100 capsules",
        description: "<p>Nzpurehealth Propolis 100 capsules</p>",
        productImage:
          "https://i.ibb.co/hx0kczV/N-680001-nzpurehealth-propolis-100c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryName: "Propolis",
        vendorName: "Nzpurehealth",
        cost: 10,
        productLive: 0
      },
      {
        name: "Nzpurehealth Bovine Colostrum 100 capsules",
        description: "<p>Nzpurehealth Bovine Colostrum 100 capsules</p>",
        productImage:
          "https://i.ibb.co/rvZ4b5S/N-680003-NP-Bovine-Colostrum-100c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryName: "Colostrum",
        vendorName: "Nzpurehealth",
        cost: 10,
        productLive: 0
      },
      {
        name: "Nzpurehealth Marine Collagen 60 capsules",
        description: "<p>Nzpurehealth Marine Collagen 60 capsules</p>",
        productImage:
          "https://i.ibb.co/3RnqzkJ/N-680004-Marine-collagen-60c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryName: "Collagen",
        vendorName: "Nzpurehealth",
        cost: 10,
        productLive: 0
      },
      {
        name: "Nzpurehealth Multivitamin Plus 1500mg 60 capsules",
        description: "<p>Nzpurehealth Multivitamin Plus 1500mg 60 capsules</p>",
        productImage:
          "https://i.ibb.co/6PRxCX6/N-680005-Multivitamin-Plus-1500mg-60c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryName: "Multi Vitamin",
        vendorName: "Nzpurehealth",
        cost: 10,
        productLive: 0
      },
      {
        name: "Nzpurehealth Pure Pets Green Lipped Mussel 120 capsules",
        description: "<p>Nzpurehealth Pure Pets Green Lipped Mussel 120 capsules</p>",
        productImage:
          "https://i.ibb.co/4ZLZD7P/N-680006-NP-Pure-pets-green-lipped-mussel-120c.jpg",
        price: 25,
        qtyInStock: 30,
        categoryName: "Green Mussels",
        vendorName: "Nzpurehealth",
        cost: 10,
        productLive: 0
      },
      {
        price: 25,
        vendorName: "kuku",
        categoryName: "Green Mussels",
        qtyInStock: 50,
        name: "kuku GLM 12500 45c",
        description: "<p>kuku GLM 12500 45c</p>",
        productImage:
          "https://i.ibb.co/4fd2frP/Kuku-GLM-Oil-Range-Blister-12500-Maintenance-45-Caps-5.jpg",
          cost: 10,
          productLive: 1
      },
      {
        price: 25,
        productImage: "https://i.ibb.co/t85xhDb/glm-20250.jpg",
        name: "kuku GLM 20250",
        description: "<p>kuku GLM 20250</p>",
        vendorName: "kuku",
        categoryName: "Green Mussels",
        qtyInStock: 50,
        cost: 10,
        productLive: 0
      },
      {
        vendorName: "kuku",
        categoryName: "Green Mussels",
        qtyInStock: 50,
        price: 25,
        name: "kuku GLM27000 45c",
        description: "<p>kuku GLM27000 45c</p>",
        productImage: "https://i.ibb.co/x5y4nV5/kuku-glm27000-45.jpg",
        cost: 10,
        productLive: 0
      },
      {
        price: 25,
        productImage:
          "https://i.ibb.co/r0KkWHT/KUKU-Mussel-Oil-37000-45c-4.jpg",
        vendorName: "kuku",
        categoryName: "Green Mussels",
        qtyInStock: 50,
        name: "kuku GLM37000 45c",
        description: "<p>kuku GLM37000 45c</p>",
        cost: 8,
        productLive: 1
      },
      {
        name: "kuku GLM37000 combo",
        description: "<p>kuku GLM37000 combo</p>",
        price: 25,
        vendorName: "kuku",
        categoryName: "Green Mussels",
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/QNwXhxL/Kuku-Box-and-Bottle-with-caps-and-blister-card-1000x1000px.jpg",
          cost: 8,
          productLive: 1
      },
      {
        name: "kuku pet GLM",
        description: "<p>kuku pet GLM</p>",
        productImage:
          "https://i.ibb.co/KwjYXrq/Kuku-Pet-Health-Care-150ml-White-Bottle-v4-x1000.jpg",
        vendorName: "kuku",
        categoryName: "Green Mussels",
        qtyInStock: 50,
        price: 25,
        cost: 8,
        productLive: 1
      },
      {
        productImage:
          "https://i.ibb.co/PM8hmG8/N-650003-Joint-plus-11000mg-90c-1.jpg",
        price: 25,
        description: "<p>Nu.wise Nu.Joint</p>",
        name: "Nu.wise Nu.Joint",
        vendorName: "Nu.wise",
        categoryName: "Joint Care",
        qtyInStock: 50,
        cost: 8,
        productLive: 1
      },
      {
        vendorName: "Nu.wise",
        categoryName: "Eye Care",
        qtyInStock: 50,
        name: "Nu.wise Nu.Eyes",
        description: "<p>Nu.wise Nu.Eyes</p>",
        price: 25,
        productImage: "https://i.ibb.co/hZjLcs8/N-650006-Nu-colo-300-2-2.jpg",
        cost: 8,
        productLive: 1
      },
      {
        price: 25,
        name: "Nu.wise Nu.Colostrum",
        description: "<p>Nu.wise Nu.Colostrum</p>",
        vendorName: "Nu.wise",
        categoryName: "Immune Support",
        qtyInStock: 50,
        productImage: "https://i.ibb.co/Fb4VXNy/N-650006-Nu-colo-300-5.jpg",
        cost: 8,
        productLive: 1
      },
      {
        name: "Nu.wise Nu.Immunex Propolis",
        description: "<p>Nu.wise Nu.Immunex Propolis</p>",
        vendorName: "Nu.wise",
        categoryName: "Propolis",
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/vPbvKLZ/N-650018-Nu-Wise-Nu-Immunex-Propolis-120caps.jpg",
        price: 25,
        cost: 8,
        productLive: 1
      },
      {
        vendorName: "Nu.wise",
        categoryName: "Cissus",
        qtyInStock: 50,
        price: 25,
        productImage:
          "https://i.ibb.co/HKBWRsM/N-650019-Nu-Wise-Nu-Slim-Cissus-90tabs.jpg",
        name: "Nu.wise Nu.Slim Cissus",
        description: "<p>Nu.wise Nu.Slim Cissus</p>",
        cost: 8,
        productLive: 1
      },
      {
        productImage:
          "https://i.ibb.co/bz3JVPV/P-100001-detail-piora-colo-plus-300t-1.jpg",
        vendorName: "PaiOra",
        categoryName: "Immune Support",
        qtyInStock: 50,
        price: 25,
        name: "PaiOra Colo Plus Colostrum 300 tablets",
        description: "<p>PaiOra Colo Plus Colostrum 300 tablets</p>",
        cost: 8,
        productLive: 1
      },
      {
        name: "PaiOra Colo Deer Placenta 2500 120 capsules",
        description: "<p>PaiOra Colo Deer Placenta 2500 120 capsules</p>",
        vendorName: "PaiOra",
        categoryName: "Immune Support",
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/fdswLnF/P-100004-Pai-Ora-Deer-Placenta-2500-120c-v2-1.jpg",
        price: 25,
        cost: 8,
        productLive: 1
      },
      {
        vendorName: "PaiOra",
        categoryName: "Propolis",
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/k1q0THk/P-100009-Pai-Ora-Propolis-60s-1.jpg",
        price: 25,
        name: "PaiOra Propolis 7000 60 capsules",
        description: "<p>PaiOra Propolis 7000 60 capsules</p>",
        cost: 8,
        productLive: 1
      },
      {
        price: 25,
        name: "PaiOra Propolis 7000 120 capsules",
        description: "<p>PaiOra Propolis 7000 120 capsules</p>",
        vendorName: "PaiOra",
        categoryName: "Propolis",
        qtyInStock: 50,
        productImage:
          "https://i.ibb.co/p1QxCJ0/P-1000010-Pai-Ora-Propolis-120s-1.jpg",
          cost: 8,
          productLive: 1
      },
      {
        productImage: "https://i.ibb.co/9tgmcDH/Pai-Ora-Cissus-90tab.jpg",
        vendorName: "PaiOra",
        categoryName: "Cissus",
        qtyInStock: 50,
        name: "PaiOra Cissus 90 tablets",
        description: "<p>PaiOra Cissus 90 tablets</p>",
        price: 25,
        cost: 8,
        productLive: 1
      },
      {
        productImage:
          "https://i.ibb.co/Mpjvwh5/Paiora-GLM6500-Condroitin-300c-1.jpg",
        price: 25,
        vendorName: "PaiOra",
        categoryName: "Joint Support",
        qtyInStock: 50,
        name: "PaiOra GLM 6500 Condroitin 300 capsules",
        description: "<p>PaiOra GLM 6500 Condroitin 300 capsules</p>",
        cost: 8,
        productLive: 1
      },
      {
        vendorName: "PaiOra",
        categoryName: "Immune Support",
        qtyInStock: 50,
        name: "PaiOra Goat Colo Protein Powder 250g",
        description: "<p>PaiOra Goat Colo Protein Powder 250g</p>",
        productImage:
          "https://i.ibb.co/F3zn5kL/Premiun-Goat-Colo-protein-Powder-250g-1.jpg",
        price: 25,
        cost: 8,
        productLive: 1
      },
    ];

    for (const data of productData) {
      await productService.createProduct(data);
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("products", null, {});
    await queryInterface.bulkDelete("productCategories", null, {});
    await queryInterface.bulkDelete("productVendors", null, {});
  },
};