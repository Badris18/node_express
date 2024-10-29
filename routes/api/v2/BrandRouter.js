const express = require('express');

const router = express.Router();

const BrandController = require('../../../controllers/v2/BrandController');

router.get('/', BrandController.getAllBrands);

module.exports = router;
