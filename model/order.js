const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    id: Number,
    customerId: Number,
    name:String,
    mail: String,
    city: String,
    street: String,
    numHouse: Number,
    orderedProducts: Array,
    orderDate: Date,
    dueDate: Date
});

module.exports = orderSchema;