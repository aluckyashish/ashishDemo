"use strict";
exports.__esModule = true;
exports.OrderRoutes = void 0;
var auth_guard_service_1 = require("../services/auth-guard.service");
var orders_component_1 = require("./orders.component");
exports.OrderRoutes = [
    { path: '', component: orders_component_1.OrdersComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
];
