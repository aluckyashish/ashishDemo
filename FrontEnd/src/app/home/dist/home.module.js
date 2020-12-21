"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_component_1 = require("./home.component");
var router_1 = require("@angular/router");
var home_routes_1 = require("./home.routes");
var image_slider_component_1 = require("./image-slider/image-slider.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var featured_product_component_1 = require("./featured-product/featured-product.component");
var latest_arrival_component_1 = require("./latest-arrival/latest-arrival.component");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(home_routes_1.HomeRoutes),
                ng_bootstrap_1.NgbModule
            ],
            declarations: [
                home_component_1.HomeComponent,
                featured_product_component_1.FeaturedProductComponent,
                image_slider_component_1.ImageSliderComponent,
                latest_arrival_component_1.LatestArrivalComponent
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
