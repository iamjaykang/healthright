"use strict";

const productService = require("../services/product.service");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const productData = [
      {
        name: "Probiotic Supplement",
        description: "Aids in maintaining a healthy gut",
        product_image: "https://example.com/probiotic.jpg",
        vendor_name: "Healthy Gut Inc.",
        category_name: "Probiotics",
        qty_in_stock: 50,
        price: 24.99,
      },
      {
        name: "Omega-3 Fish Oil",
        description: "Supports heart health and brain function",
        product_image: "https://example.com/omega3.jpg",
        vendor_name: "Heart and Brain LLC",
        category_name: "Fish Oils",
        qty_in_stock: 40,
        price: 19.99,
      },
      {
        name: "Vitamin D3",
        description: "Helps with calcium absorption and immune system support",
        product_image: "https://example.com/vitamind.jpg",
        vendor_name: "Sunny Bones Inc.",
        category_name: "Vitamins",
        qty_in_stock: 60,
        price: 14.99,
      },
      {
        name: "Multivitamin",
        description: "Provides daily essential vitamins and minerals",
        product_image: "https://example.com/multivitamin.jpg",
        vendor_name: "Essentials Co.",
        category_name: "Multivitamins",
        qty_in_stock: 70,
        price: 29.99,
      },
      {
        name: "Ginseng Supplement",
        description: "Boosts energy and mental clarity",
        product_image: "https://example.com/ginseng.jpg",
        vendor_name: "Energy Boost LLC",
        category_name: "Herbal Supplements",
        qty_in_stock: 30,
        price: 24.99,
      },
      {
        name: "Glucosamine Supplement",
        description: "Supports joint health",
        product_image: "https://example.com/glucosamine.jpg",
        vendor_name: "Joint Health Inc.",
        category_name: "Joint Supplements",
        qty_in_stock: 40,
        price: 19.99,
      },
      {
        name: "Whey Protein Powder",
        description: "Supports muscle growth and recovery",
        product_image: "https://example.com/wheyprotein.jpg",
        vendor_name: "Muscle Fuel LLC",
        category_name: "Protein Supplements",
        qty_in_stock: 50,
        price: 39.99,
      },
      {
        name: "Creatine Supplement",
        description: "Enhances athletic performance and muscle growth",
        product_image: "https://example.com/creatine.jpg",
        vendor_name: "Performance Plus Inc.",
        category_name: "Performance Supplements",
        qty_in_stock: 50,
        price: 39.99,
      },
      {
        name: "Turmeric Capsules",
        description: "Turmeric supplement for joint and brain health",
        product_image: "https://example.com/turmeric_capsules.jpg",
        vendor_name: "Healthy Supplements Inc.",
        category_name: "Herbs",
        qty_in_stock: 20,
        price: 24.99,
      },
      {
        name: "Vitamin C Tablets",
        description:
          "Vitamin C supplement for immune system support and skin health",
        product_image: "https://example.com/vitamin_c_tablets.jpg",
        vendor_name: "Healthy Supplements Inc.",
        category_name: "Vitamins",
        qty_in_stock: 60,
        price: 9.99,
      },
    ];

    for (const data of productData) {
      await productService.createProduct(data);
    }
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
    await queryInterface.bulkDelete('product_categories', null, {});
    await queryInterface.bulkDelete('product_vendors', null, {});
  },
};
