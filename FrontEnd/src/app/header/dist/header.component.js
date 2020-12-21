"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AuthActions = require("../store/auth/auth.actions");
var CartActions = require("../store/cart/cart.actions");
var BrowseActions = require("../store/browse/browse.actions");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, router, route, dropdownConfig) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.dropdownConfig = dropdownConfig;
        this.cartItemCount = 0;
        this.isCollapsed = true;
        dropdownConfig.placement = 'bottom-right';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.browseState = this.store.select('browse');
        this.authState = this.store.select('auth');
        this.cartState = this.store.select('cart');
        this.store.dispatch(new BrowseActions.FetchCategory());
        this.authStateSubscription = this.authState
            .subscribe(function (data) {
            if (data.authenticated) {
                _this.store.dispatch(new CartActions.FetchCart());
                _this.cartItemCountSubscription = _this.cartState.subscribe(function (dataCart) {
                    if (dataCart.cart && dataCart.cart.cartItems && dataCart.cart.cartItems.length) {
                        _this.cartItemCount = dataCart.cart.cartItems.reduce(function (total, cartItem) { return total + cartItem.amount; }, 0);
                    }
                    else {
                        _this.cartItemCount = 0;
                    }
                });
            }
            else if (_this.cartItemCountSubscription) {
                _this.cartItemCountSubscription.unsubscribe();
            }
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        if (this.authStateSubscription) {
            this.authStateSubscription.unsubscribe();
        }
        if (this.cartItemCountSubscription) {
            this.cartItemCountSubscription.unsubscribe();
        }
    };
    HeaderComponent.prototype.userSignOut = function () {
        this.store.dispatch(new AuthActions.SignOut());
        this.router.navigate(['/']);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
            providers: [ng_bootstrap_1.NgbDropdownConfig]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
