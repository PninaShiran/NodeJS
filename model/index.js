const mongoose = require('mongoose');
const productSchema = require('./product');
const userSchema = require('./user');
const orderSchema = require('./order');

exports.Products = mongoose.model('products',productSchema);
exports.Orders = mongoose.model('orders', orderSchema);
exports.Users = mongoose.model('users',userSchema);