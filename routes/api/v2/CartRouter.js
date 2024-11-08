const express = require('express');

const router = express.Router();

const cartController = require('../../../controllers/v2/CartController');

// Define routes for each cart operation
router.get('/', cartController.getAllCarts);          // Get all items in the cart
router.post('/', cartController.addItemToCart);       // Add an item to the cart
router.put('/:id',cartController. updateCartItem);    // Update quantity of an item in the cart
router.delete('/:id', cartController.removeCartItem); // Remove an item from the cart
router.delete('/', cartController.clearCart); 

module.exports = router;