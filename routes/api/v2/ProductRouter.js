const express = require('express');
const productController = require('../../../Controllers/v2/ProductController');
const router = express.Router();

// Route to get all categories
router.get('/', productController.getAllProducts);

module.exports = router;
