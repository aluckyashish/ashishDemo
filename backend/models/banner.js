
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bannerSchema = new Schema({
    "title":String,
    "text":String,
    "image":String

}, { collection: 'banners' });
var Banners = mongoose.model('banner', bannerSchema);
module.exports = {Banners, bannerSchema };
