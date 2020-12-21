"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignupComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AuthActions = require("../../store/auth/auth.actions");
var PasswordValidators = require("../../../utils/validators/password.validator");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(store) {
        this.store = store;
        this.emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = new forms_1.FormGroup({
            email: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.pattern(this.emailPattern)]),
            lastName: new forms_1.FormControl(null, [forms_1.Validators.required]),
            firstName: new forms_1.FormControl(null, [forms_1.Validators.required]),
            passwordGroup: new forms_1.FormGroup({
                newPassword: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(52)]),
                newPasswordConfirm: new forms_1.FormControl(null, [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.maxLength(52)])
            }, PasswordValidators.passwordMatchCheckValidator.bind(this))
        });
        this.authState = this.store.select('auth');
    };
    SignupComponent.prototype.onSubmitted = function () {
        this.store.dispatch(new AuthActions.SignUp({
            email: this.signUpForm.value.email,
            firstName: this.signUpForm.value.firstName,
            lastName: this.signUpForm.value.lastName,
            password: this.signUpForm.value.passwordGroup.newPassword,
            passwordRepeat: this.signUpForm.value.passwordGroup.newPasswordConfirm
        }));
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.scss']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
