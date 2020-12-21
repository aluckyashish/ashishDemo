"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckoutComponent = void 0;
/* eslint-disable radix */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CheckoutActions = require("../store/checkout/checkout.action");
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(store, router) {
        this.store = store;
        this.router = router;
        this.shippingValue = 5;
        this.submitCheck = false;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkoutForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(null, [forms_1.Validators.required]),
            lastName: new forms_1.FormControl(null, [forms_1.Validators.required]),
            userEmail: new forms_1.FormControl(null, [forms_1.Validators.required]),
            address: new forms_1.FormControl(null, [forms_1.Validators.required]),
            city: new forms_1.FormControl(null, [forms_1.Validators.required]),
            state: new forms_1.FormControl(null, [forms_1.Validators.required]),
            country: new forms_1.FormControl(null, [forms_1.Validators.required]),
            mobileNumber: new forms_1.FormControl(null, [forms_1.Validators.required])
        });
        this.cartState = this.store.select('cart');
        this.cartItemCountSubscription = this.cartState.subscribe(function (data) {
            if (data.cart && data.cart.length) {
                _this.cartItems = data.cart;
                _this.cartItemCount = data.cart.length;
                _this.cartTotal = 0;
                data.cart.forEach(function (element) {
                    _this.cartTotal = parseInt(element.amount, 10) + _this.cartTotal;
                });
                _this.grandTotal = _this.cartTotal + _this.shippingValue;
            }
            else if (_this.submitCheck === true && data.cart.length >= 0) {
                _this.cartItemCount = 0;
            }
            else {
                _this.router.navigate(['/']);
                _this.cartItemCount = 0;
            }
        });
        this.authState = this.store.select('auth');
        this.getUserValueSubscription = this.authState.subscribe(function (data) {
            if (data.users) {
                _this.checkoutForm.patchValue({
                    firstName: data.users.firstName,
                    lastName: data.users.lastName,
                    userEmail: data.users.email
                });
            }
        });
    };
    CheckoutComponent.prototype.onSubmitted = function () {
        this.submitCheck = true;
        var FinalValue = {
            firstName: this.checkoutForm.value.firstName,
            lastName: this.checkoutForm.value.lastName,
            email: this.checkoutForm.value.userEmail,
            address: this.checkoutForm.value.address,
            city: this.checkoutForm.value.city,
            state: this.checkoutForm.value.state,
            country: this.checkoutForm.value.country,
            mobileNumber: this.checkoutForm.value.mobileNumber,
            product: JSON.stringify(this.cartItems)
        };
        this.store.dispatch(new CheckoutActions.Checkout(FinalValue));
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.scss']
        })
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
