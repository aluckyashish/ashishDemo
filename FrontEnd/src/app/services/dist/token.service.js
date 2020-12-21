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
exports.TokenService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Cookies = require("js-cookie");
var graphql_tag_1 = require("graphql-tag");
var local_1 = require("../../config/local");
var TokenService = /** @class */ (function () {
    function TokenService(httpClient, apollo) {
        this.httpClient = httpClient;
        this.apollo = apollo;
        this.url = local_1.config.authUrl + "/oauth/token";
    }
    TokenService.prototype.obtainAccessToken = function (email, password) {
        var body = new http_1.HttpParams();
        body = body.append('username', email);
        body = body.append('password', password);
        body = body.append('scope', 'read write');
        body = body.append('grant_type', 'password');
        body = body.append('client_id', local_1.config.clientId);
        var GET_USER = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query GetUserSignIn($email:String!,$password:String!) {\n      getUserById(email: $email,password :$password) {\n        token\n        user{\n          firstName\n          lastName\n          email\n        }\n      }\n    }\n  "], ["\n    query GetUserSignIn($email:String!,$password:String!) {\n      getUserById(email: $email,password :$password) {\n        token\n        user{\n          firstName\n          lastName\n          email\n        }\n      }\n    }\n  "])));
        return this.apollo
            .query({
            query: GET_USER,
            variables: {
                email: email,
                password: password
            }
        });
        // return this.httpClient.post(this.url, body, {
        //   headers: {
        //     'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        //     Authorization: 'Basic '
        //       + btoa(`${config.clientId}:${config.clientSecret}`)
        //   }
        // });
    };
    TokenService.prototype.obtainAccessTokenWithRefreshToken = function (refreshToken) {
        var body = new http_1.HttpParams();
        body = body.append('refresh_token', refreshToken);
        body = body.append('grant_type', 'refresh_token');
        return this.httpClient.post(this.url, body, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
                Authorization: "Basic " + btoa(local_1.config.clientId + ":" + local_1.config.clientSecret)
            }
        });
    };
    TokenService.prototype.saveToken = function (resData) {
        var token = { access_token: resData.data.getUserById.token, users: resData.data.getUserById.users };
        Cookies.set('usr', JSON.stringify(token), { expires: 365 });
    };
    TokenService.prototype.removeToken = function () {
        Cookies.remove('usr');
    };
    TokenService.prototype.getToken = function () {
        var token = Cookies.get('usr');
        if (!token) {
            return '';
        }
        return JSON.parse(token).access_token;
    };
    TokenService.prototype.getRefreshToken = function () {
        var token = Cookies.get('usr');
        if (!token) {
            return '';
        }
        return JSON.parse(token).refresh_token;
    };
    TokenService.prototype.checkIfTokenExists = function () {
        var token = Cookies.get('usr');
        if (!token) {
            return false;
        }
        return JSON.parse(token);
    };
    TokenService = __decorate([
        core_1.Injectable()
    ], TokenService);
    return TokenService;
}());
exports.TokenService = TokenService;
var templateObject_1;
