"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckoutService = void 0;
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var CheckoutService = /** @class */ (function () {
    function CheckoutService(apollo) {
        this.apollo = apollo;
    }
    CheckoutService.prototype.createOrder = function (firstName, lastName, email, address, city, state, country, mobileNumber, product) {
        var POST_ORDER = apollo_angular_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n    mutation addOrder($firstName:String!,$lastName:String!,$email:String!,$address:String!,$city:String!,$state:String!,$country:String!,$mobileNumber:Float!,$product:String!)\n    {\n        addOrder(firstName:$firstName,lastName:$lastName,email:$email,address:$address,city:$city,state:$state,country:$country,mobileNumber:$mobileNumber,product:$product){\n          firstName\n        }\n    }\n\n  "], ["\n\n    mutation addOrder($firstName:String!,$lastName:String!,$email:String!,$address:String!,$city:String!,$state:String!,$country:String!,$mobileNumber:Float!,$product:String!)\n    {\n        addOrder(firstName:$firstName,lastName:$lastName,email:$email,address:$address,city:$city,state:$state,country:$country,mobileNumber:$mobileNumber,product:$product){\n          firstName\n        }\n    }\n\n  "])));
        return this.apollo
            .mutate({
            mutation: POST_ORDER,
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                city: city,
                state: state,
                country: country,
                mobileNumber: mobileNumber,
                product: product
            }
        });
    };
    CheckoutService = __decorate([
        core_1.Injectable()
    ], CheckoutService);
    return CheckoutService;
}());
exports.CheckoutService = CheckoutService;
var templateObject_1;
