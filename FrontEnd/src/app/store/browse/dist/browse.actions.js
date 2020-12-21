"use strict";
exports.__esModule = true;
exports.BrowseError = exports.FetchColorsSuccess = exports.FetchColors = exports.FetchCategorySuccess = exports.FetchCategory = exports.FetchProductsCountSuccess = exports.FetchProductsCount = exports.FetchProductAppendSuccess = exports.FetchProductsAppend = exports.FetchProductsSuccess = exports.FetchProducts = exports.BROWSE_ERROR = exports.FETCH_COLORS_SUCCESS = exports.FETCH_COLORS = exports.FETCH_CATEGORY_SUCCESS = exports.FETCH_CATEGORY = exports.FETCH_PRODUCTS_COUNT_SUCCESS = exports.FETCH_PRODUCTS_COUNT = exports.FETCH_PRODUCTS_APPEND_SUCCESS = exports.FETCH_PRODUCTS_APPEND = exports.FETCH_PRODUCTS_SUCCESS = exports.FETCH_PRODUCTS = void 0;
exports.FETCH_PRODUCTS = 'FETCH_PRODUCTS';
exports.FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
exports.FETCH_PRODUCTS_APPEND = 'FETCH_PRODUCTS_APPEND';
exports.FETCH_PRODUCTS_APPEND_SUCCESS = 'FETCH_PRODUCTS_APPEND_SUCCESS';
exports.FETCH_PRODUCTS_COUNT = 'FETCH_PRODUCTS_COUNT';
exports.FETCH_PRODUCTS_COUNT_SUCCESS = 'FETCH_PRODUCTS_COUNT_SUCCESS';
exports.FETCH_CATEGORY = 'FETCH_CATEGORY';
exports.FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
exports.FETCH_COLORS = 'FETCH_COLORS';
exports.FETCH_COLORS_SUCCESS = 'FETCH_COLORS_SUCCESS';
exports.BROWSE_ERROR = 'BROWSE_ERROR';
var FetchProducts = /** @class */ (function () {
    function FetchProducts(payload) {
        this.payload = payload;
        this.type = exports.FETCH_PRODUCTS;
    }
    return FetchProducts;
}());
exports.FetchProducts = FetchProducts;
var FetchProductsSuccess = /** @class */ (function () {
    function FetchProductsSuccess(payload) {
        this.payload = payload;
        this.type = exports.FETCH_PRODUCTS_SUCCESS;
    }
    return FetchProductsSuccess;
}());
exports.FetchProductsSuccess = FetchProductsSuccess;
var FetchProductsAppend = /** @class */ (function () {
    function FetchProductsAppend(payload) {
        this.payload = payload;
        this.type = exports.FETCH_PRODUCTS_APPEND;
    }
    return FetchProductsAppend;
}());
exports.FetchProductsAppend = FetchProductsAppend;
var FetchProductAppendSuccess = /** @class */ (function () {
    function FetchProductAppendSuccess(payload) {
        this.payload = payload;
        this.type = exports.FETCH_PRODUCTS_APPEND_SUCCESS;
    }
    return FetchProductAppendSuccess;
}());
exports.FetchProductAppendSuccess = FetchProductAppendSuccess;
var FetchProductsCount = /** @class */ (function () {
    function FetchProductsCount(payload) {
        this.payload = payload;
        this.type = exports.FETCH_PRODUCTS_COUNT;
    }
    return FetchProductsCount;
}());
exports.FetchProductsCount = FetchProductsCount;
var FetchProductsCountSuccess = /** @class */ (function () {
    function FetchProductsCountSuccess(payload) {
        this.payload = payload;
        this.type = exports.FETCH_PRODUCTS_COUNT_SUCCESS;
    }
    return FetchProductsCountSuccess;
}());
exports.FetchProductsCountSuccess = FetchProductsCountSuccess;
var FetchCategory = /** @class */ (function () {
    function FetchCategory() {
        this.type = exports.FETCH_CATEGORY;
    }
    return FetchCategory;
}());
exports.FetchCategory = FetchCategory;
var FetchCategorySuccess = /** @class */ (function () {
    function FetchCategorySuccess(payload) {
        this.payload = payload;
        this.type = exports.FETCH_CATEGORY_SUCCESS;
    }
    return FetchCategorySuccess;
}());
exports.FetchCategorySuccess = FetchCategorySuccess;
var FetchColors = /** @class */ (function () {
    function FetchColors() {
        this.type = exports.FETCH_COLORS;
    }
    return FetchColors;
}());
exports.FetchColors = FetchColors;
var FetchColorsSuccess = /** @class */ (function () {
    function FetchColorsSuccess(payload) {
        this.payload = payload;
        this.type = exports.FETCH_COLORS_SUCCESS;
    }
    return FetchColorsSuccess;
}());
exports.FetchColorsSuccess = FetchColorsSuccess;
var BrowseError = /** @class */ (function () {
    function BrowseError(payload) {
        this.payload = payload;
        this.type = exports.BROWSE_ERROR;
    }
    return BrowseError;
}());
exports.BrowseError = BrowseError;
