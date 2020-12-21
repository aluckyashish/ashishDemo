const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  "id": {
    "type": "String"
  },
  "slug": {
    "type": "String"
  },
  "isFeatured":{
    "type":"Boolean"
  },
  "descriptionMarkdown": {
    "type": "String"
  },
  "title": {
    "type": "String"
  },
  "quantity": {
    "type": "Number"
  },
  "images": {
    "type": "String"
  },
  "price": {
    "amount": {
      "type": "Number"
    },
    "currency": {
      "type": "String"
    }
  },
  "category": {
    "type": "String"
  }

});
var Products = mongoose.model('products', productSchema);
module.exports = { Products, productSchema };
