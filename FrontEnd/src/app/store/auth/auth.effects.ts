/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import {
  catchError, concatMap, map, switchMap,
} from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import * as CartActions from '../cart/cart.actions';
import * as ShowcaseActions from '../showcase/showcase.actions';
import { TokenService } from '../../services/token.service';
import { AccountService } from '../../services/account.service';

@Injectable()
export class AuthEffects {
  @Effect()
  signUp = this.actions$
    .pipe(ofType(AuthActions.SIGN_UP),
      map((action: AuthActions.SignUp) => action.payload),
      switchMap((credentials: {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        passwordRepeat: string
      }) => this.accountService.createAccount(credentials.firstName,
        credentials.lastName,
        credentials.email,
        credentials.password)
        .pipe(switchMap(() => [
          {
            type: AuthActions.SIGN_UP_SUCCESS, payload: { effect: AuthActions.SIGN_UP },
          },
          {
            type: AuthActions.SIGN_IN, // automatic sign in
            payload: { email: credentials.email, password: credentials.password },
          },
        ]), catchError((error) => of(new AuthActions.AuthError({ error, errorEffect: AuthActions.SIGN_UP }))))));

  @Effect()
  signIn = this.actions$
    .pipe(ofType(AuthActions.SIGN_IN),
      map((action: AuthActions.SignIn) => action.payload),
      switchMap((credentials: { email: string, password: string, password2: string }) => this.tokenService.obtainAccessToken(credentials.email, credentials.password)
        .pipe(switchMap((res) => {
          this.tokenService.saveToken(res);
          this.router.navigate(['/checkout']);
          return [
            { type: AuthActions.SIGN_IN_SUCCESS, payload: res },
            { type: AuthActions.FETCH_VERIFICATION_STATUS, payload: { effect: AuthActions.SIGN_IN } },
          ];
        }), catchError((error) => of(new AuthActions.AuthError({ error, errorEffect: AuthActions.SIGN_IN }))))));

  @Effect()
  signOut = this.actions$
    .pipe(ofType(AuthActions.SIGN_OUT),
      concatMap((action: AuthActions.SignOut) => {
        this.tokenService.removeToken();
        return [
          {
            type: AuthActions.SIGN_OUT_SUCCESS,
          },
          {
            type: CartActions.EMPTY_CART_SUCCESS, // clearing memory
          },
        ];
      }));

  @Effect()
  checkIfLoggedIn = this.actions$
    .pipe(ofType(AuthActions.CHECK_IF_LOGGED_IN),
      switchMap((action: AuthActions.CheckIfLoggedIn) => {
        if (this.tokenService.checkIfTokenExists()) {
          return [
            {
              type: AuthActions.SIGN_IN_SUCCESS, payload: action,
            },
            {
              type: AuthActions.FETCH_VERIFICATION_STATUS,
            },
          ];
        }
        return [{
          type: AuthActions.SIGN_OUT_SUCCESS, payload: { effect: AuthActions.SIGN_OUT },
        }];
      }));

  constructor(
    private actions$: Actions,
    private tokenService: TokenService,
    private router: Router,
    private accountService: AccountService,
  ) {
  }
}
