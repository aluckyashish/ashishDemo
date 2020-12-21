"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var usersSchema = new Schema({
  "firstName": String,
  "lastName": String,
  "email": String,
  "password": String
}, {
  collection: 'users'
});
var Users = mongoose.model('users', usersSchema);
module.exports = {
  Users: Users,
  usersSchema: usersSchema
};