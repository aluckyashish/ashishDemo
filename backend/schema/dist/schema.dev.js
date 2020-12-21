"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\ntype Price {\n    amount: Int!\n    currency: String!\n  }\n\n  \n\n  type Product {\n    id: ID!\n    title: String\n    slug: String!\n    descriptionMarkdown: String\n    quantity: Int\n    price: Price\n    isFeatured:Boolean\n    category: String\n    images: String\n  }\n\n  type ProductList {\n    amount: Int!\n    offset: Int!\n    total: Int\n    remaining: Int\n    items: [Product]\n  }\n\n  type Catalogue {\n    id: ID!\n    product: ProductList\n    title: String!\n    metaTitle: String\n  }\n\n  type Category {\n      name:String\n  }\n  type Banner {\n      text:String\n      title:String\n      image:String\n  }\n  type Orders {\n    firstName: String!\n    lastName: String!\n    address: String!\n    city: String!\n    state: String!\n    country: String!\n    mobileNumber:Float\n    product:String!\n  }\n  \n  type Users {\n    firstName: String!\n    lastName: String!\n    email:String!\n    password :String!\n  }\n  type UserToken\n  {\n    user:Users\n    token:String!\n\n  }\n\n  type Query {\n    # Return a catalogue contains list of product\n    getCatalogue(amount: Int, offset: Int): Catalogue!\n\n    # Return a product by its id\n    getProductById(id: String): Product\n    getOrderByEmail(id:String):[Orders]\n    getFeaturedProduct:[Product]\n    getLatestProduct:[Product]\n    getProduct: [Product]\n    getCategory:[Category]\n    getProductByCategory(name:String,sort:String):[Product]\n    getBanners:[Banner]\n    getUserById (email: String,password: String): UserToken\n\n  }\n  type Mutation {\n    addOrder(firstName: String!, lastName: String!, email:String!,address: String!,city: String!, state: String!, country: String!,mobileNumber:Float,product:String!): Orders\n    \n    addUsers(firstName: String!, lastName: String!, email: String!,password: String!): Users\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server-hapi'),
    gql = _require.gql;

var typeDefs = gql(_templateObject());
module.exports = typeDefs;