"use strict";
exports.__esModule = true;
exports.FetchOrderSuccess = exports.FetchOrder = exports.FETCH_ORDER_SUCCESS = exports.FETCH_ORDER = void 0;
exports.FETCH_ORDER = 'FETCH_ORDER';
exports.FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
var FetchOrder = /** @class */ (function () {
    function FetchOrder(payload) {
        this.payload = payload;
        this.type = exports.FETCH_ORDER;
    }
    return FetchOrder;
}());
exports.FetchOrder = FetchOrder;
var FetchOrderSuccess = /** @class */ (function () {
    function FetchOrderSuccess(payload) {
        this.payload = payload;
        this.type = exports.FETCH_ORDER_SUCCESS;
    }
    return FetchOrderSuccess;
}());
exports.FetchOrderSuccess = FetchOrderSuccess;
