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
exports.cartReducer = void 0;
var CartActions = require("./cart.actions");
var initialState = {
    cart: [],
    errors: [],
    loading: false,
    fetchLoading: false
};
function cartReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (CartActions.ADD_TO_CART):
            var newCart = __spreadArrays(state.cart, [action.payload]);
            return {
                cart: newCart,
                loading: false,
                errors: [],
                fetchLoading: state.fetchLoading
            };
        case (CartActions.FETCH_CART):
            return __assign(__assign({}, state), { fetchLoading: true });
        case (CartActions.FETCH_CART_SUCCESS):
            return {
                cart: action.payload.cart,
                errors: __spreadArrays(state.errors.filter(function (error) { return error.errorEffect !== action.payload.effect; })),
                loading: false,
                fetchLoading: false
            };
        case (CartActions.ADD_TO_CART):
        case (CartActions.REMOVE_FROM_CART):
            return __assign(__assign({}, state), { cart: state.cart.filter(function (product) { return product.id !== action.payload.id; }), loading: false });
        case (CartActions.INCREMENT_CART):
            var currentCart = __spreadArrays(state.cart);
            var cartUpdateindexInc_1 = currentCart.findIndex(function (item, i) { return item.id === action.payload.id; });
            return __assign(__assign({}, state), { cart: state.cart.map(function (cart, i) { return (i === cartUpdateindexInc_1 ? __assign(__assign({}, cart), { qty: action.payload.qty, amount: state.cart[cartUpdateindexInc_1].basePrice * action.payload.qty }) : cart); }), loading: false });
        case (CartActions.DECREMENT_CART):
            var currentCartDec = __spreadArrays(state.cart);
            var cartUpdateindex_1 = currentCartDec.findIndex(function (item, i) { return item.id === action.payload.id; });
            return __assign(__assign({}, state), { cart: state.cart.map(function (cart, i) { return (i === cartUpdateindex_1 ? __assign(__assign({}, cart), { qty: action.payload.qty, amount: state.cart[cartUpdateindex_1].basePrice * action.payload.qty }) : cart); }), loading: false });
        case (CartActions.CART_ERROR):
            var errors = __spreadArrays(state.errors);
            var index = errors.findIndex(function (error) { return error.errorEffect === action.payload.errorEffect; });
            if (index !== -1) {
                errors[index] = action.payload;
            }
            else {
                errors.push(action.payload);
            }
            return __assign(__assign({}, state), { loading: false, errors: errors });
        case (CartActions.EMPTY_CART_SUCCESS):
            return initialState;
        default:
            return state;
    }
}
exports.cartReducer = cartReducer;
