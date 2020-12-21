"use strict";
exports.__esModule = true;
exports.AppRoutes = void 0;
var about_component_1 = require("./about/about.component");
var g_page_not_found_component_1 = require("./g-page-not-found/g-page-not-found.component");
exports.AppRoutes = [
    { path: 'not-found', component: g_page_not_found_component_1.GPageNotFoundComponent, data: { message: 'Page not found!' } },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'account', loadChildren: './account/account.module#AccountModule' },
    { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
    { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
    { path: 'orders', loadChildren: './orders/orders.module#OrderModule' },
    { path: '**', redirectTo: '/not-found' }
];
