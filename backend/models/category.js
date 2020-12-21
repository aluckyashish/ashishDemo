
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    "name":String

}, { collection: 'category' });
var CategoryP = mongoose.model('category', categorySchema);
module.exports = {CategoryP, categorySchema };
