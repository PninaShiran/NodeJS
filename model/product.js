const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    img: String,
    qty: Number,
    price: Number,
    company: String,
    manufacturingDate: String
});

module.exports = productSchema;
