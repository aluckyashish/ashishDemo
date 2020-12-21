"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BrowseEffects = void 0;
/* eslint-disable max-len */
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var BrowseActions = require("./browse.actions");
var BrowseEffects = /** @class */ (function () {
    function BrowseEffects(actions$, productService) {
        var _this = this;
        this.actions$ = actions$;
        this.productService = productService;
        this.fetchProducts = this.actions$
            .pipe(effects_1.ofType(BrowseActions.FETCH_PRODUCTS), operators_1.map(function (action) { return action.payload; }), operators_1.switchMap(function (params) { return _this.productService.getProducts(params.sort, params.category)
            .pipe(operators_1.map(function (res) { return ({
            type: BrowseActions.FETCH_PRODUCTS_SUCCESS,
            payload: {
                res: res,
                effect: BrowseActions.FETCH_PRODUCTS
            }
        }); }), operators_1.catchError(function (error) { return rxjs_1.of(new BrowseActions.BrowseError({ error: error, errorEffect: BrowseActions.FETCH_PRODUCTS })); })); }));
        this.fetchCategory = this.actions$
            .pipe(effects_1.ofType(BrowseActions.FETCH_CATEGORY), operators_1.switchMap(function (action) { return _this.productService.getCategory()
            .pipe(operators_1.map(function (res) { return ({
            type: BrowseActions.FETCH_CATEGORY_SUCCESS,
            payload: { res: res, effect: BrowseActions.FETCH_CATEGORY }
        }); }), operators_1.catchError(function (error) { return rxjs_1.of(new BrowseActions.BrowseError({ error: error, errorEffect: BrowseActions.FETCH_CATEGORY })); })); }));
    }
    __decorate([
        effects_1.Effect()
    ], BrowseEffects.prototype, "fetchProducts");
    __decorate([
        effects_1.Effect()
    ], BrowseEffects.prototype, "fetchCategory");
    BrowseEffects = __decorate([
        core_1.Injectable()
    ], BrowseEffects);
    return BrowseEffects;
}());
exports.BrowseEffects = BrowseEffects;
