const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({

    name: { type: String, required: true },

    category: { type: mongoose.Schema.ObjectId, ref: 'Category' }

}, {timestamps: true});

const SubCategory = mongoose.model('SubCategory', subcategorySchema);

module.exports = SubCategory;