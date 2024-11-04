const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker'); // Access faker via destructuring
const Product = require('../models/Product'); // Adjust the path as necessary

// Function to create fake products
async function seedProducts() {
    try {
        // Clear existing data
        await Product.deleteMany({});

        // Create 20 fake products
        const products = [];
        for (let i = 0; i < 20; i++) {
            products.push({
                name: faker.commerce.productName(),  // Generates a random product name
                description: faker.commerce.productDescription(), // Generates a random product description
            });
        }

        // Insert all products at once for better performance
        await Product.insertMany(products);
        console.log('Products seeded successfully');
    } catch (err) {
        console.error('Error seeding products:', err);
    }
}

// Export the seedProducts function for use in other files
module.exports = seedProducts;
