const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image_path: { type: String, default: 'no_image_available.jpg'}

},{timestamps: true});

const Brand = mongoose.model('Brand', brandschema);

module.exports = Brand;