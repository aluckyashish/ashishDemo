import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../../store/auth/auth.actions';
import { AuthState } from '../../store/auth/auth.reducer';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  emailPattern = '^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$';

  authState: Observable<AuthState>;
  showError: boolean;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(52)]),
    });
    this.showError = false;
    this.authState = this.store.select('auth');
  }

  onSubmitted() {
    this.showError = true;
    this.store.dispatch(new AuthActions.SignIn({
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    }));
  }
}
