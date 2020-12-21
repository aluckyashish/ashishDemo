"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartComponent = void 0;
/* eslint-disable radix */
var core_1 = require("@angular/core");
var CartActions = require("../store/cart/cart.actions");
var CartComponent = /** @class */ (function () {
    function CartComponent(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.showDiscountInput = false;
        this.shippingValue = 50;
        this.grandTotal = 0;
        this.applyCodeShow = false;
        this.cartItemCount = 0;
        this.cartTotal = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartState = this.store.select('cart');
        this.cartItemCountSubscription = this.cartState.subscribe(function (data) {
            if (data.cart && data.cart.length) {
                _this.cartItemCount = data.cart.length;
                _this.cartTotal = 0;
                data.cart.forEach(function (element) {
                    _this.cartTotal = parseInt(element.amount, 10) + _this.cartTotal;
                });
                _this.grandTotal = _this.cartTotal + _this.shippingValue;
            }
            else {
                _this.cartItemCount = 0;
            }
        });
    };
    CartComponent.prototype.ngOnDestroy = function () {
        if (this.cartItemCountSubscription) {
            this.cartItemCountSubscription.unsubscribe();
        }
    };
    CartComponent.prototype.goToItem = function (productUrl) {
        this.router.navigate(['/detail/', productUrl], { relativeTo: this.route });
    };
    CartComponent.prototype.removeFromCart = function (id) {
        this.store.dispatch(new CartActions.RemoveFromCart({ id: id }));
    };
    CartComponent.prototype.qtyIncrement = function (id, quantity) {
        var setQuantity = parseInt(quantity, 10) + 1;
        this.store.dispatch(new CartActions.IncrementCart({ id: id, qty: setQuantity }));
    };
    CartComponent.prototype.qtyDecrement = function (id, quantity) {
        var setQuantity = parseInt(quantity, 10) - 1;
        this.store.dispatch(new CartActions.DecrementCart({ id: id, qty: setQuantity }));
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.scss']
        })
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
