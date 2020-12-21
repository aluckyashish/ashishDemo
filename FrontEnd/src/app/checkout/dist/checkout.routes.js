"use strict";
exports.__esModule = true;
exports.CheckoutRoutes = void 0;
var checkout_component_1 = require("./checkout.component");
var auth_guard_service_1 = require("../services/auth-guard.service");
var success_component_1 = require("./success/success.component");
exports.CheckoutRoutes = [
    { path: '', component: checkout_component_1.CheckoutComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    {
        path: 'success',
        component: success_component_1.SuccessComponent,
        canActivate: [auth_guard_service_1.AuthGuardService]
    },
];
