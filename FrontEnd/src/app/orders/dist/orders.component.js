"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrdersComponent = void 0;
var core_1 = require("@angular/core");
var OrderActions = require("../store/orders/orders.actions");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(store) {
        this.store = store;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderState = this.store.select('orders');
        this.authState = this.store.select('auth');
        this.getUserValueSubscription = this.authState.subscribe(function (data) {
            _this.userEmail = data.users.email;
            _this.store.dispatch(new OrderActions.FetchOrder({ id: _this.userEmail }));
        });
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'app-orders',
            templateUrl: './orders.component.html',
            styleUrls: ['./orders.component.scss']
        })
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
