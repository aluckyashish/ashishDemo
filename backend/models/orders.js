
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ordersSchema = new Schema({
    "firstName":String,
    "lastName":String,
    "email":String,
    "address":String,
    "city":String,
    "state":String,
    "country":String,
    "mobileNumber":Number,
    "product":String

}, { collection: 'orders' });
var Orders = mongoose.model('orders', ordersSchema);
module.exports = {Orders, ordersSchema };
