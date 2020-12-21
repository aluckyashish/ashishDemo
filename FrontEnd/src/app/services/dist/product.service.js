"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var graphql_tag_1 = require("graphql-tag");
var ProductService = /** @class */ (function () {
    function ProductService(httpClient, apollo) {
        this.httpClient = httpClient;
        this.apollo = apollo;
        this.browsePageSize = 20;
        this.searchPageSize = 10;
    }
    ProductService.prototype.getProducts = function (sortType, category) {
        var GET_PRODUCT = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query GetProductByCategory($name:String!,$sort:String!) {\n    getProductByCategory(name: $name,sort:$sort) {\n      id\n      title\n      images\n      price{\n        amount\n      }\n    }\n  }\n"], ["\n  query GetProductByCategory($name:String!,$sort:String!) {\n    getProductByCategory(name: $name,sort:$sort) {\n      id\n      title\n      images\n      price{\n        amount\n      }\n    }\n  }\n"])));
        return this.apollo
            .query({
            query: GET_PRODUCT,
            variables: {
                name: category,
                sort: sortType
            }
        });
    };
    ProductService.prototype.getFullProduct = function (productUrl) {
        var GET_PRODUCT_BY_ID = graphql_tag_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query GetDullProduct($id:String!) {\n      getProductById(id:$id)\n  {\n    id\n    title\n    category\n    descriptionMarkdown\n    price{\n      amount\n    }\n    images\n  }\n    }\n  "], ["\n    query GetDullProduct($id:String!) {\n      getProductById(id:$id)\n  {\n    id\n    title\n    category\n    descriptionMarkdown\n    price{\n      amount\n    }\n    images\n  }\n    }\n  "])));
        return this.apollo
            .query({
            query: GET_PRODUCT_BY_ID,
            variables: {
                id: productUrl
            }
        });
    };
    ProductService.prototype.getFeaturedProduct = function () {
        return this.apollo
            .query({
            query: graphql_tag_1["default"](templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        {\n          getFeaturedProduct{\n            id\n            images\n            title\n            category\n            isFeatured\n            price\n            {\n              amount\n            }\n          }\n        }\n      "], ["\n        {\n          getFeaturedProduct{\n            id\n            images\n            title\n            category\n            isFeatured\n            price\n            {\n              amount\n            }\n          }\n        }\n      "])))
        });
    };
    ProductService.prototype.getNewProduct = function () {
        return this.apollo
            .query({
            query: graphql_tag_1["default"](templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        {\n          getLatestProduct{\n            id\n            images\n            title\n            category\n            isFeatured\n            price\n            {\n              amount\n            }\n          }\n        }\n      "], ["\n        {\n          getLatestProduct{\n            id\n            images\n            title\n            category\n            isFeatured\n            price\n            {\n              amount\n            }\n          }\n        }\n      "])))
        });
    };
    ProductService.prototype.getImageSlider = function () {
        {
            return this.apollo
                .query({
                query: graphql_tag_1["default"](templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        {\n          getBanners{\n            title\n            text\n            image\n          }\n        }"], ["\n        {\n          getBanners{\n            title\n            text\n            image\n          }\n        }"])))
            });
        }
    };
    ProductService.prototype.getInterested = function () {
        //  return this.httpClient.get<Array<Product>>(this.publicUrl + '/interested');
    };
    ProductService.prototype.getCategory = function () {
        {
            return this.apollo
                .query({
                query: graphql_tag_1["default"](templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        {\n          getCategory {\n            name\n          }\n        }"], ["\n        {\n          getCategory {\n            name\n          }\n        }"])))
            });
        }
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
