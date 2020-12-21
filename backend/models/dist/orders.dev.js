"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ordersSchema = new Schema({
  "firstName": String,
  "lastName": String,
  "email": String,
  "address": String,
  "city": String,
  "state": String,
  "country": String,
  "mobileNumber": Number,
  "product": String
}, {
  collection: 'orders'
});
var Orders = mongoose.model('orders', ordersSchema);
module.exports = {
  Orders: Orders,
  ordersSchema: ordersSchema
};