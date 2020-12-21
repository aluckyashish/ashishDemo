"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthEffects = void 0;
/* eslint-disable max-len */
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AuthActions = require("./auth.actions");
var CartActions = require("../cart/cart.actions");
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, tokenService, router, accountService) {
        var _this = this;
        this.actions$ = actions$;
        this.tokenService = tokenService;
        this.router = router;
        this.accountService = accountService;
        this.signUp = this.actions$
            .pipe(effects_1.ofType(AuthActions.SIGN_UP), operators_1.map(function (action) { return action.payload; }), operators_1.switchMap(function (credentials) { return _this.accountService.createAccount(credentials.firstName, credentials.lastName, credentials.email, credentials.password)
            .pipe(operators_1.switchMap(function () { return [
            {
                type: AuthActions.SIGN_UP_SUCCESS, payload: { effect: AuthActions.SIGN_UP }
            },
            {
                type: AuthActions.SIGN_IN,
                payload: { email: credentials.email, password: credentials.password }
            },
        ]; }), operators_1.catchError(function (error) { return rxjs_1.of(new AuthActions.AuthError({ error: error, errorEffect: AuthActions.SIGN_UP })); })); }));
        this.signIn = this.actions$
            .pipe(effects_1.ofType(AuthActions.SIGN_IN), operators_1.map(function (action) { return action.payload; }), operators_1.switchMap(function (credentials) { return _this.tokenService.obtainAccessToken(credentials.email, credentials.password)
            .pipe(operators_1.switchMap(function (res) {
            _this.tokenService.saveToken(res);
            _this.router.navigate(['/checkout']);
            return [
                { type: AuthActions.SIGN_IN_SUCCESS, payload: res },
                { type: AuthActions.FETCH_VERIFICATION_STATUS, payload: { effect: AuthActions.SIGN_IN } },
            ];
        }), operators_1.catchError(function (error) { return rxjs_1.of(new AuthActions.AuthError({ error: error, errorEffect: AuthActions.SIGN_IN })); })); }));
        this.signOut = this.actions$
            .pipe(effects_1.ofType(AuthActions.SIGN_OUT), operators_1.concatMap(function (action) {
            _this.tokenService.removeToken();
            return [
                {
                    type: AuthActions.SIGN_OUT_SUCCESS
                },
                {
                    type: CartActions.EMPTY_CART_SUCCESS
                },
            ];
        }));
        this.checkIfLoggedIn = this.actions$
            .pipe(effects_1.ofType(AuthActions.CHECK_IF_LOGGED_IN), operators_1.switchMap(function (action) {
            if (_this.tokenService.checkIfTokenExists()) {
                return [
                    {
                        type: AuthActions.SIGN_IN_SUCCESS, payload: action
                    },
                    {
                        type: AuthActions.FETCH_VERIFICATION_STATUS
                    },
                ];
            }
            return [{
                    type: AuthActions.SIGN_OUT_SUCCESS, payload: { effect: AuthActions.SIGN_OUT }
                }];
        }));
    }
    __decorate([
        effects_1.Effect()
    ], AuthEffects.prototype, "signUp");
    __decorate([
        effects_1.Effect()
    ], AuthEffects.prototype, "signIn");
    __decorate([
        effects_1.Effect()
    ], AuthEffects.prototype, "signOut");
    __decorate([
        effects_1.Effect()
    ], AuthEffects.prototype, "checkIfLoggedIn");
    AuthEffects = __decorate([
        core_1.Injectable()
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;
