const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    customerId: Number,
    name: String,
    password: String,
    mail: String,
    role: Number,
    city: String,
    street: String,
    numHouse: Number,
    phone: String
});

module.exports = userSchema;
