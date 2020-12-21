"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailComponent = void 0;
/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable padded-blocks */
var core_1 = require("@angular/core");
var CartActions = require("../store/cart/cart.actions");
var CurrentProductActions = require("../store/product/product.action");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(router, route, store) {
        this.router = router;
        this.route = route;
        this.store = store;
        this.innerLoading = true;
        this.isPopState = false;
        this.fetchError = null;
        this.activeTab = 0;
        this.cartValue = [];
        this.continueAddtoCart = true;
        this.topPosToStartShowing = 100;
        this.cartSuccess = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartSuccess = false;
        this.gotoTop();
        this.cartState = this.store.select('cart');
        this.currentProductState = this.store.select('currentProduct');
        this.cartState.subscribe(function (data) { if (data.cart) {
            _this.cartValue = data.cart;
        } });
        this.paramSubscription = this.route.params.subscribe(function (params) {
            _this.productUrl = params.productUrl;
            _this.innerLoading = true;
            _this.product = { id: _this.productUrl };
            _this.checkCartProduct();
            _this.store.dispatch(new CurrentProductActions.FetchCurrentProduct({ id: _this.productUrl }));
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubscription) {
            this.paramSubscription.unsubscribe();
        }
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    };
    ProductDetailComponent.prototype.checkScroll = function () {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    };
    ProductDetailComponent.prototype.gotoTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    ProductDetailComponent.prototype.checkCartProduct = function () {
        var _this = this;
        var selProd = this.cartValue.find(function (p) { return p.id === _this.product.id; });
        if (selProd) {
            this.continueAddtoCart = false;
        }
    };
    ProductDetailComponent.prototype.addToCart = function (id, image, name, price, amountElement) {
        var amount = amountElement.value;
        if (parseInt(amount, 10) < 1) {
            alert('Please put right quantity');
            return;
        }
        var finalPrice = parseInt(amount, 10) * price;
        this.store.dispatch(new CartActions.AddToCart({
            id: id, image: image, name: name,
            amount: finalPrice, qty: amount, basePrice: price
        }));
        this.product = { id: id };
        this.cartSuccess = true;
        this.gotoTop();
        this.checkCartProduct();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss']
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
