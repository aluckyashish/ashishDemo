"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.localStorageSyncReducer = void 0;
/* eslint-disable import/no-unresolved */
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ngrx_store_localstorage_1 = require("ngrx-store-localstorage");
var http_1 = require("@angular/common/http");
var effects_1 = require("@ngrx/effects");
var store_1 = require("@ngrx/store");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var store_devtools_1 = require("@ngrx/store-devtools");
// eslint-disable-next-line import/no-unresolved
var app_component_1 = require("./app.component");
var header_module_1 = require("./header/header.module");
var home_module_1 = require("./home/home.module");
var auth_module_1 = require("./auth/auth.module");
var footer_module_1 = require("./footer/footer.module");
var app_routes_1 = require("./app.routes");
// eslint-disable-next-line import/no-unresolved
var g_page_not_found_component_1 = require("./g-page-not-found/g-page-not-found.component");
var browse_module_1 = require("./browse/browse.module");
var product_detail_module_1 = require("./product-detail/product-detail.module");
var product_service_1 = require("./services/product.service");
var app_reducers_1 = require("./store/app.reducers");
var token_service_1 = require("./services/token.service");
var auth_effects_1 = require("./store/auth/auth.effects");
var token_interceptor_1 = require("./services/token.interceptor");
var auth_guard_service_1 = require("./services/auth-guard.service");
var showcase_effects_1 = require("./store/showcase/showcase.effects");
var account_service_1 = require("./services/account.service");
var browse_effects_1 = require("./store/browse/browse.effects");
var non_auth_guard_service_1 = require("./services/non-auth-guard.service");
var graphql_module_1 = require("./graphql.module");
var checkout_effect_1 = require("./store/checkout/checkout.effect");
var product_effect_1 = require("./store/product/product.effect");
var checkout_service_1 = require("./services/checkout.service");
var orders_effect_1 = require("./store/orders/orders.effect");
var orders_services_1 = require("./services/orders.services");
function localStorageSyncReducer(reducer) {
    return ngrx_store_localstorage_1.localStorageSync({ keys: ['cart', 'auth'], rehydrate: true })(reducer);
}
exports.localStorageSyncReducer = localStorageSyncReducer;
var metaReducers = [localStorageSyncReducer];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                g_page_not_found_component_1.GPageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                header_module_1.HeaderModule,
                home_module_1.HomeModule,
                browse_module_1.BrowseModule,
                product_detail_module_1.ProductDetailModule,
                auth_module_1.AuthModule,
                // FaqModule, lazy loaded module not imported here
                footer_module_1.FooterModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule,
                store_1.StoreModule.forRoot(app_reducers_1.reducers, { metaReducers: metaReducers }),
                effects_1.EffectsModule.forRoot([
                    checkout_effect_1.CheckoutEffects,
                    auth_effects_1.AuthEffects,
                    showcase_effects_1.ShowcaseEffects,
                    product_effect_1.CurrentProductEffects,
                    orders_effect_1.GetOrderEffects,
                    browse_effects_1.BrowseEffects
                ]),
                router_1.RouterModule.forRoot(app_routes_1.AppRoutes, { useHash: false, preloadingStrategy: router_1.PreloadAllModules }),
                graphql_module_1.GraphQLModule,
                store_devtools_1.StoreDevtoolsModule.instrument({
                    name: 'Ecommerce App HCL'
                }),
            ],
            providers: [product_service_1.ProductService,
                token_service_1.TokenService,
                auth_guard_service_1.AuthGuardService,
                checkout_service_1.CheckoutService,
                non_auth_guard_service_1.NonAuthGuardService,
                orders_services_1.OrdersService,
                account_service_1.AccountService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_1.TokenInterceptor,
                    multi: true
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
