
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    "firstName":String,
    "lastName":String,
    "email":String,
    "password":String

}, { collection: 'users' });
var Users = mongoose.model('users', usersSchema);
module.exports = {Users, usersSchema };
