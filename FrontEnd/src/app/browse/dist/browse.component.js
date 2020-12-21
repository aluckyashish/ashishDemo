"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BrowseComponent = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var BrowseActions = require("../store/browse/browse.actions");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent(store, route) {
        this.store = store;
        this.route = route;
        this.sortBy = [
            {
                display: 'Lowest Price',
                value: 'lowest'
            },
            {
                display: 'Highest Price',
                value: 'highest'
            },
        ];
        this.canFetch = false;
        this.selectedSort = 'lowest';
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.browseState = this.store.select('browse');
        this.categoryName = this.route.snapshot.paramMap.get('name');
        this.route.params.subscribe(function (params) {
            _this.selectedSort = 'lowest';
            _this.currentCategory = params.name;
            _this.geAllProduct(_this.selectedSort);
        });
    };
    BrowseComponent.prototype.geAllProduct = function (sortType) {
        var _this = this;
        this.canFetchSubscription = this.browseState.pipe(operators_1.take(1)).subscribe(function (data) {
            _this.selectedSort = data.selectedSort;
            _this.getProducts(sortType, _this.currentCategory);
        });
    };
    BrowseComponent.prototype.ngOnDestroy = function () {
        if (this.canFetchSubscription) {
            this.canFetchSubscription.unsubscribe();
        }
    };
    BrowseComponent.prototype.selectSort = function (sort) {
        this.selectedSort = sort;
        this.geAllProduct(sort);
    };
    BrowseComponent.prototype.getProducts = function (sortType, categoryName) {
        this.store.dispatch(new BrowseActions.FetchProducts({
            sort: sortType,
            category: categoryName
        }));
    };
    BrowseComponent = __decorate([
        core_1.Component({
            selector: 'app-browse',
            templateUrl: './browse.component.html',
            styleUrls: ['./browse.component.scss']
        })
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;
