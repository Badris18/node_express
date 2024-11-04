const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create the Product model
const Product = mongoose.model('Product', productSchema);

// Export the model
module.exports = Product;
