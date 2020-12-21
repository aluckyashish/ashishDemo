"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CurrentProductEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var ProductActions = require("./product.action");
var CurrentProductEffects = /** @class */ (function () {
    function CurrentProductEffects(actions$, productService) {
        var _this = this;
        this.actions$ = actions$;
        this.productService = productService;
        this.FetchCurrentProduct = this.actions$
            .pipe(effects_1.ofType(ProductActions.FETCH_CURRENT_PRODUCT), operators_1.map(function (action) { return action.payload; }), 
        // eslint-disable-next-line max-len
        // eslint-disable-next-line no-unused-vars
        // eslint-disable-next-line max-len
        // eslint-disable-next-line no-unused-vars
        operators_1.switchMap(function (Id) { return _this.productService.getFullProduct(Id.id)
            .pipe(operators_1.map(function (res) { return ({
            type: ProductActions.FETCH_CURRENT_PRODUCT_SUCCESS,
            payload: { res: res, effect: ProductActions.FETCH_CURRENT_PRODUCT }
        }); })); }));
    }
    __decorate([
        effects_1.Effect()
    ], CurrentProductEffects.prototype, "FetchCurrentProduct");
    CurrentProductEffects = __decorate([
        core_1.Injectable()
    ], CurrentProductEffects);
    return CurrentProductEffects;
}());
exports.CurrentProductEffects = CurrentProductEffects;
