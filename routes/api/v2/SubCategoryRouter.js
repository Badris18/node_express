const { faker } = require('@faker-js/faker');
const SubCategory = require('../../../models/SubCategory'); // Import the SubCategory model
const Category = require('../../../models/Category'); // Import the Category model to fetch category IDs

// Function to seed fake subcategories
async function seedSubCategories() {
    try {
        // Clear existing subcategory data
        await SubCategory.deleteMany({});

        // Fetch all category IDs to associate subcategories with existing categories
        const categories = await Category.find();
        const categoryIds = categories.map(category => category._id);

        if (categoryIds.length === 0) {
            console.log("No categories found. Please seed categories first.");
            return;
        }

        // Create an array to hold subcategory instances
        const subcategories = [];

        // Create 20 fake subcategories
        for (let i = 0; i < 20; i++) {
            subcategories.push({
                name: faker.commerce.department(), // Generates a random subcategory name
                description: faker.lorem.sentence(), // Generates a random description
                category: faker.helpers.arrayElement(categoryIds) // Assigns a random category ID
            });
        }

        // Insert all subcategories at once for better performance
        await SubCategory.insertMany(subcategories);
        console.log('Subcategories seeded successfully');
    } catch (err) {
        console.error('Error seeding subcategories:', err);
    }
}

// Export the seedSubCategories function for use in other files
module.exports = seedSubCategories;