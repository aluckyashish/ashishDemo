"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var bannerSchema = new Schema({
  "title": String,
  "text": String,
  "image": String
}, {
  collection: 'banners'
});
var Banners = mongoose.model('banner', bannerSchema);
module.exports = {
  Banners: Banners,
  bannerSchema: bannerSchema
};