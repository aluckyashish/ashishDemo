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
exports.OrdersService = void 0;
var core_1 = require("@angular/core");
var graphql_tag_1 = require("graphql-tag");
var OrdersService = /** @class */ (function () {
    function OrdersService(httpClient, apollo) {
        this.httpClient = httpClient;
        this.apollo = apollo;
    }
    OrdersService.prototype.getOrders = function (userEmail) {
        var GET_ORDER_BY_ID = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetOrders($id:String!) {\n        getOrderByEmail(id:$id)\n  {\n      product\n  }\n    }\n  "], ["\n    query GetOrders($id:String!) {\n        getOrderByEmail(id:$id)\n  {\n      product\n  }\n    }\n  "])));
        return this.apollo
            .query({
            query: GET_ORDER_BY_ID,
            variables: {
                id: userEmail
            }
        });
    };
    OrdersService = __decorate([
        core_1.Injectable()
    ], OrdersService);
    return OrdersService;
}());
exports.OrdersService = OrdersService;
var templateObject_1;
