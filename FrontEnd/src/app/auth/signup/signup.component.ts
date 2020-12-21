import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from '../../store/auth/auth.actions';
import * as fromApp from '../../store/app.reducers';
import { AuthState } from '../../store/auth/auth.reducer';
import * as PasswordValidators from '../../../utils/validators/password.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';

  authState: Observable<AuthState>;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      lastName: new FormControl(null, [Validators.required]),
      firstName: new FormControl(null, [Validators.required]),
      passwordGroup: new FormGroup({
        newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
        newPasswordConfirm: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
      }, PasswordValidators.passwordMatchCheckValidator.bind(this)),
    });

    this.authState = this.store.select('auth');
  }

  onSubmitted(): void {
    this.store.dispatch(new AuthActions.SignUp(
      {
        email: this.signUpForm.value.email,
        firstName: this.signUpForm.value.firstName,
        lastName: this.signUpForm.value.lastName,
        password: this.signUpForm.value.passwordGroup.newPassword,
        passwordRepeat: this.signUpForm.value.passwordGroup.newPasswordConfirm,
      },
    ));
  }
}
