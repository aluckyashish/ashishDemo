/* eslint-disable no-empty-function */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import {
  map, catchError, mergeMap, switchMap,
} from 'rxjs/operators';
import { CheckoutService } from 'src/app/services/checkout.service';
import * as CheckoutActions from './checkout.action';
import * as CartActions from '../cart/cart.actions';

@Injectable()
export class CheckoutEffects {
  @Effect()
  checkout = this.actions$
    .pipe(ofType(CheckoutActions.CHECKOUT),
      map((action: CheckoutActions.Checkout) => action.payload),
      switchMap((CheckoutDetails: {
        firstName: string,
        lastName: string,
        email: string,
        address: string,
        city: string,
        state: string,
        country: string,
        mobileNumber: number,
        product: string
      }) => this.checkoutService.createOrder(CheckoutDetails.firstName,
        CheckoutDetails.lastName,
        CheckoutDetails.email,
        CheckoutDetails.address,
        CheckoutDetails.city,
        CheckoutDetails.state,
        CheckoutDetails.country,
        CheckoutDetails.mobileNumber,
        CheckoutDetails.product)
        .pipe(switchMap((res) => {
          this.router.navigate(['/checkout/success']);
          return [
            { type: CartActions.EMPTY_CART_SUCCESS },

          ];
        }))));

  constructor(
    private actions$: Actions,
    private router: Router,
    private checkoutService: CheckoutService,
  ) {
  }
}
