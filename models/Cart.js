const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({

    product_id: { type: mongoose.Schema.ObjectId, ref:'Product' },

    quantity: { type: Number, default: 1 },

    added_at: { type: Date, default: Date.now }

}, { timestamps: true });

const Cart = mongoose.model( 'Cart', CartSchema );

module.exports = Cart;