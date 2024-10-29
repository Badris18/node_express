const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
const Brand = require('./models/Brand'); // Adjust the path if necessary

async function seedBrands() {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Clear existing data
        await Brand.deleteMany({});

        // Create 20 fake brands
        const brands = [];
        for (let i = 0; i < 20; i++) {
            brands.push({
                name: faker.company.companyName(),  // Generates a random brand name
                image_path: faker.image.imageUrl(), // Generates a random image URL
            });
        }

        // Insert all brands at once for better performance
        await Brand.insertMany(brands);
        console.log('Brands seeded successfully');
    } catch (err) {
        console.error('Error seeding brands:', err);
    } finally {
        mongoose.connection.close();
    }
}

// Run the seed function
seedBrands();