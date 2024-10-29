const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker'); // Access faker via destructuring
const Category = require('../models/Category'); // Assuming the Category model is in the models folder

// Function to create fake categories
async function seedCategories() {
    try {
        // Clear existing data
        await Category.deleteMany({});

        // Create 20 fake categories
        const categories = [];
        for (let i = 0; i < 20; i++) {
            categories.push({
                name: faker.commerce.department(),  // Generates a random category name
            });
        }

        // Insert all categories at once for better performance
        await Category.insertMany(categories);
        console.log('Categories seeded successfully');
    } catch (err) {
        console.error('Error seeding categories:', err);
    }
}

// Export the seedCategories function for use in other files
module.exports = seedCategories;