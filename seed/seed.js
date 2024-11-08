const mongoose = require('mongoose');
const seedCategories = require('./CategorySeeder'); // Import the seedCategories function
const seedBrands = require('./BrandSeeder'); // Import the seedBrands function
const seedProducts = require('./ProductSeeder'); // Import the seedBrands function
const seedSubCategories = require('./SubCategorySeeder');
const { connectDB, disconnectDB } = require('../config/db'); // Import database connection functions

// Function to run seeders in sequence
async function runSeeders() {
    try {
        // Ensure MongoDB connection
        console.log('Connecting to the database...');
        await connectDB(); // Await the connection
        

        console.log('Seeding categories...');
        await seedCategories();  // Seed categories first

        console.log('Seeding brands...');
        await seedBrands(); // Seed brands first

        console.log('Seeding products...');
        await seedProducts(); // Seed brands first

        console.log('Seeding products...');
        await seedSubCategories(); // Seed brands first
        

    } catch (err) {
        console.error('Error during seeding:', err);
        
    } finally {
        // Use disconnectDB to close the connection
        console.log('Disconnecting from the database...');
        await disconnectDB(); // Await the disconnection
        
    }
}

// Run the seeders
runSeeders().catch(err => {
    console.error('Error in runSeeders process:', err);
});