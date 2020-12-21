"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShowcaseEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var ShowcaseActions = require("./showcase.actions");
var ShowcaseEffects = /** @class */ (function () {
    function ShowcaseEffects(actions$, productService) {
        var _this = this;
        this.actions$ = actions$;
        this.productService = productService;
        this.FetchFeaturedProduct = this.actions$
            .pipe(effects_1.ofType(ShowcaseActions.FETCH_FEATURED_PRODUCT), operators_1.switchMap(function (action) { return _this.productService.getFeaturedProduct()
            .pipe(operators_1.map(function (res) { return ({
            type: ShowcaseActions.FETCH_FEATURED_PRODUCT_SUCCESS,
            payload: { res: res, effect: ShowcaseActions.FETCH_FEATURED_PRODUCT }
        }); }), operators_1.catchError(function (error) { return rxjs_1.of(new ShowcaseActions.ShowcaseError({ error: error, errorEffect: ShowcaseActions.FETCH_FEATURED_PRODUCT })); })); }));
        this.FetchNewProduct = this.actions$
            .pipe(effects_1.ofType(ShowcaseActions.FETCH_NEWELY_PRODUCT), operators_1.switchMap(function (action) { return _this.productService.getNewProduct()
            .pipe(operators_1.map(function (res) { return ({
            type: ShowcaseActions.FETCH_NEWELY_PRODUCT_SUCCESS,
            payload: { res: res, effect: ShowcaseActions.FETCH_NEWELY_PRODUCT }
        }); }), operators_1.catchError(function (error) { return rxjs_1.of(new ShowcaseActions.ShowcaseError({ error: error, errorEffect: ShowcaseActions.FETCH_NEWELY_PRODUCT })); })); }));
        this.fetchImageSlider = this.actions$
            .pipe(effects_1.ofType(ShowcaseActions.FETCH_IMAGE_SLIDER), operators_1.switchMap(function (action) { return _this.productService.getImageSlider()
            .pipe(operators_1.map(function (res) { return ({
            type: ShowcaseActions.FETCH_IMAGE_SLIDER_SUCCESS,
            payload: { res: res, effect: ShowcaseActions.FETCH_IMAGE_SLIDER }
        }); }), operators_1.catchError(function (error) { return rxjs_1.of(new ShowcaseActions.ShowcaseError({ error: error, errorEffect: ShowcaseActions.FETCH_IMAGE_SLIDER })); })); }));
    }
    __decorate([
        effects_1.Effect()
    ], ShowcaseEffects.prototype, "FetchFeaturedProduct");
    __decorate([
        effects_1.Effect()
    ], ShowcaseEffects.prototype, "FetchNewProduct");
    __decorate([
        effects_1.Effect()
    ], ShowcaseEffects.prototype, "fetchImageSlider");
    ShowcaseEffects = __decorate([
        core_1.Injectable()
    ], ShowcaseEffects);
    return ShowcaseEffects;
}());
exports.ShowcaseEffects = ShowcaseEffects;
