"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GetOrderEffects = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-len */
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var OrderActions = require("./orders.actions");
var GetOrderEffects = /** @class */ (function () {
    function GetOrderEffects(actions$, ordersService) {
        var _this = this;
        this.actions$ = actions$;
        this.ordersService = ordersService;
        this.FetchOrders = this.actions$
            .pipe(effects_1.ofType(OrderActions.FETCH_ORDER), operators_1.map(function (action) { return action.payload; }), operators_1.switchMap(function (Id) { return _this.ordersService.getOrders(Id.id)
            .pipe(operators_1.map(function (res) { return ({
            type: OrderActions.FETCH_ORDER_SUCCESS,
            payload: { res: res, effect: OrderActions.FETCH_ORDER }
        }); })); }));
    }
    __decorate([
        effects_1.Effect()
    ], GetOrderEffects.prototype, "FetchOrders");
    GetOrderEffects = __decorate([
        core_1.Injectable()
    ], GetOrderEffects);
    return GetOrderEffects;
}());
exports.GetOrderEffects = GetOrderEffects;
