"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GraphQLModule = exports.createApollo = void 0;
var core_1 = require("@angular/core");
var apollo_angular_1 = require("apollo-angular");
var core_2 = require("@apollo/client/core");
var http_1 = require("apollo-angular/http");
var uri = 'http://www.api.aquamediadirect.com/graphql'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri: uri }),
        cache: new core_2.InMemoryCache()
    };
}
exports.createApollo = createApollo;
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = __decorate([
        core_1.NgModule({
            providers: [
                {
                    provide: apollo_angular_1.APOLLO_OPTIONS,
                    useFactory: createApollo,
                    deps: [http_1.HttpLink]
                },
            ]
        })
    ], GraphQLModule);
    return GraphQLModule;
}());
exports.GraphQLModule = GraphQLModule;
