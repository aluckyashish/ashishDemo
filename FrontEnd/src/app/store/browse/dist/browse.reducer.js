"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.browseReducer = void 0;
var BrowseActions = require("./browse.actions");
var initialState = {
    products: [],
    productsCount: 0,
    colors: null,
    categories: null,
    canFetch: true,
    selectedPage: 0,
    selectedSort: 'any',
    selectedCategory: 'any',
    selectedColor: 'any',
    minPrice: '0',
    maxPrice: '0',
    errors: [],
    loading: false
};
function browseReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (BrowseActions.FETCH_PRODUCTS_APPEND):
        case (BrowseActions.FETCH_PRODUCTS):
            return __assign(__assign({}, state), { loading: true });
        case (BrowseActions.FETCH_PRODUCTS_SUCCESS):
            return __assign(__assign({}, state), { selectedPage: action.payload.selectedPage, selectedSort: action.payload.selectedSort, products: action.payload.res.data.getProductByCategory, canFetch: action.payload.res.length !== 0, errors: __spreadArrays(state.errors.filter(function (error) { return error.errorEffect !== action.payload.effect; })), loading: false });
        case (BrowseActions.FETCH_PRODUCTS_APPEND_SUCCESS):
            return __assign(__assign({}, state), { selectedPage: action.payload.selectedPage, selectedSort: action.payload.selectedSort, selectedCategory: action.payload.selectedCategory, selectedColor: action.payload.selectedColor, minPrice: action.payload.minPrice, maxPrice: action.payload.maxPrice, products: __spreadArrays(state.products, action.payload.res), canFetch: action.payload.res.length !== 0, errors: __spreadArrays(state.errors.filter(function (error) { return error.errorEffect !== action.payload.effect; })), loading: false });
        case (BrowseActions.FETCH_PRODUCTS_COUNT_SUCCESS):
            return __assign(__assign({}, state), { productsCount: action.payload.res, errors: __spreadArrays(state.errors.filter(function (error) { return error.errorEffect !== action.payload.effect; })) });
        case (BrowseActions.FETCH_CATEGORY_SUCCESS):
            return __assign(__assign({}, state), { categories: action.payload.res, errors: __spreadArrays(state.errors.filter(function (error) { return error.errorEffect !== action.payload.effect; })) });
        case (BrowseActions.FETCH_COLORS_SUCCESS):
            return __assign(__assign({}, state), { colors: action.payload.res, errors: __spreadArrays(state.errors.filter(function (error) { return error.errorEffect !== action.payload.effect; })) });
        case (BrowseActions.BROWSE_ERROR):
            var errors = __spreadArrays(state.errors);
            var index = errors.findIndex(function (error) { return error.errorEffect === action.payload.errorEffect; });
            if (index !== -1) {
                errors[index] = action.payload;
            }
            else {
                errors.push(action.payload);
            }
            return __assign(__assign({}, state), { loading: false, errors: errors });
        default:
            return state;
    }
}
exports.browseReducer = browseReducer;
