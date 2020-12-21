"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var orders_component_1 = require("./orders.component");
var orders_routes_1 = require("./orders.routes");
var parse_json_pipe_1 = require("./parse-json.pipe");
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(orders_routes_1.OrderRoutes),
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule
            ],
            declarations: [orders_component_1.OrdersComponent, parse_json_pipe_1.ParseJsonPipe]
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
