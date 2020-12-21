"use strict";
/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable default-case */
/* eslint-disable no-case-declarations */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.currentProductReducer = void 0;
var ProductActions = require("./product.action");
var initialState = {
    currentProduct: null
};
function currentProductReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (ProductActions.FETCH_CURRENT_PRODUCT):
            var currentProduct = '';
            currentProduct = ProductActions.FETCH_CURRENT_PRODUCT;
            return __assign(__assign({}, state), { loading: currentProduct });
        case (ProductActions.FETCH_CURRENT_PRODUCT_SUCCESS):
            return __assign(__assign({}, state), { currentProduct: action.payload.res.data.getProductById });
        default:
            return state;
    }
}
exports.currentProductReducer = currentProductReducer;
