"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SigninComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AuthActions = require("../../store/auth/auth.actions");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(store) {
        this.store = store;
        this.emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signInForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern(this.emailPattern)]),
            password: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(52)])
        });
        this.showError = false;
        this.authState = this.store.select('auth');
    };
    SigninComponent.prototype.onSubmitted = function () {
        this.showError = true;
        this.store.dispatch(new AuthActions.SignIn({
            email: this.signInForm.value.email,
            password: this.signInForm.value.password
        }));
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
        })
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
