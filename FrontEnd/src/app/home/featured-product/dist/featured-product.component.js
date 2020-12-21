"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeaturedProductComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var ShowcaseActions = require("../../store/showcase/showcase.actions");
var FeaturedProductComponent = /** @class */ (function () {
    function FeaturedProductComponent(store) {
        this.store = store;
    }
    FeaturedProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showcaseState = this.store.select('showcase');
        this.showcaseState
            .pipe(operators_1.take(1))
            .subscribe(function (data) {
            if (data.featureProduct.length === 0) {
                _this.store.dispatch(new ShowcaseActions.FetchFeaturedProduct());
            }
        });
    };
    FeaturedProductComponent = __decorate([
        core_1.Component({
            selector: 'app-featured-added',
            templateUrl: './featured-product.component.html',
            styleUrls: ['./featured-product.component.scss']
        })
    ], FeaturedProductComponent);
    return FeaturedProductComponent;
}());
exports.FeaturedProductComponent = FeaturedProductComponent;
