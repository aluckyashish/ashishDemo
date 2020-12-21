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
exports.authReducer = void 0;
/* eslint-disable linebreak-style */
var AuthActions = require("./auth.actions");
var initialState = {
    authenticated: false,
    users: null,
    isActive: null,
    errors: [],
    loading: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (AuthActions.SIGN_OUT):
        case (AuthActions.SIGN_UP):
            return __assign(__assign({}, state), { loading: true });
        case (AuthActions.SIGN_UP_SUCCESS):
            return __assign(__assign({}, state), { errors: __spreadArrays(state.errors.filter(function (error) { return error.errorEffect !== action.payload.effect; })), loading: false });
        case (AuthActions.SIGN_IN_SUCCESS):
            if (action.payload.data) {
                return __assign(__assign({}, state), { users: action.payload.data.getUserById.user, authenticated: true, errors: __spreadArrays(state.errors.filter(function (error) { return error.errorEffect !== action.payload.effect; })), loading: false });
            }
            return __assign(__assign({}, state), { authenticated: true, errors: __spreadArrays(state.errors.filter(function (error) { return error.errorEffect !== action.payload.effect; })), loading: false });
        case (AuthActions.AUTH_ERROR):
            var errors = __spreadArrays(state.errors);
            var index = errors.findIndex(function (error) { return error.errorEffect === action.payload.errorEffect; });
            if (index !== -1) {
                errors[index] = action.payload;
            }
            else {
                errors.push(action.payload);
            }
            return __assign(__assign({}, state), { loading: false, errors: errors });
        case (AuthActions.SIGN_OUT_SUCCESS):
            return initialState;
        case (AuthActions.FETCH_VERIFICATION_STATUS_SUCCESS):
            return __assign(__assign({}, state), { isActive: action.payload });
        default:
            return state;
    }
}
exports.authReducer = authReducer;
