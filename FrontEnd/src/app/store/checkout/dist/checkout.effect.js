"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckoutEffects = void 0;
/* eslint-disable no-empty-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var CheckoutActions = require("./checkout.action");
var CartActions = require("../cart/cart.actions");
var CheckoutEffects = /** @class */ (function () {
    function CheckoutEffects(actions$, router, checkoutService) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.checkoutService = checkoutService;
        this.checkout = this.actions$
            .pipe(effects_1.ofType(CheckoutActions.CHECKOUT), operators_1.map(function (action) { return action.payload; }), operators_1.switchMap(function (CheckoutDetails) { return _this.checkoutService.createOrder(CheckoutDetails.firstName, CheckoutDetails.lastName, CheckoutDetails.email, CheckoutDetails.address, CheckoutDetails.city, CheckoutDetails.state, CheckoutDetails.country, CheckoutDetails.mobileNumber, CheckoutDetails.product)
            .pipe(operators_1.switchMap(function (res) {
            _this.router.navigate(['/checkout/success']);
            return [
                { type: CartActions.EMPTY_CART_SUCCESS },
            ];
        })); }));
    }
    __decorate([
        effects_1.Effect()
    ], CheckoutEffects.prototype, "checkout");
    CheckoutEffects = __decorate([
        core_1.Injectable()
    ], CheckoutEffects);
    return CheckoutEffects;
}());
exports.CheckoutEffects = CheckoutEffects;
