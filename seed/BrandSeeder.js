const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Brand = require('../models/Brand'); // Adjust the path if necessary

async function seedBrands() {
    try {
        await Brand.deleteMany({});
        // Create 20 fake brands
        const brands = [];
        for (let i = 0; i < 20; i++) {
            brands.push({
                name: faker.company.name(),  // Generates a random brand name
                image_path: faker.image.avatar(), // Updated method
            });
        }
        // Insert all brands at once for better performance
        await Brand.insertMany(brands);
        console.log('Brands seeded successfully');
    } catch (err) {
        console.error('Error seeding brands:', err);
    }
}

// Run the seed function
module.exports = seedBrands;
