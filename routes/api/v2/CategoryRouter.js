const express = require('express');
const categoryController = require('../../../Controllers/v2/CategoryController');
const router = express.Router();

// Route to get all categories
router.get('/', categoryController.getAllCategories);

module.exports = router;
