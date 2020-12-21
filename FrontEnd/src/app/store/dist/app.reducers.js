"use strict";
exports.__esModule = true;
exports.reducers = void 0;
var fromCart = require("./cart/cart.reducer");
var fromAuth = require("./auth/auth.reducer");
var fromShowcase = require("./showcase/showcase.reducer");
var fromCurrentProductcase = require("./product/product.reducer");
var fromBrowse = require("./browse/browse.reducer");
var fromOrders = require("./orders/orders.reducer");
exports.reducers = {
    currentProduct: fromCurrentProductcase.currentProductReducer,
    cart: fromCart.cartReducer,
    auth: fromAuth.authReducer,
    showcase: fromShowcase.showcaseReducer,
    browse: fromBrowse.browseReducer,
    orders: fromOrders.orderReducer
};
