/* eslint-disable radix */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducers';
import { AuthState } from '../store/auth/auth.reducer';
import { CartState } from '../store/cart/cart.reducer';
import * as CheckoutActions from '../store/checkout/checkout.action';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  cartState: Observable<CartState>;

  authState: Observable<AuthState>;

  cartItemCountSubscription: any;

  cartItemCount: any;

  getUserValueSubscription: any;

  cartItems: any;

  cartTotal: number;

  grandTotal: any;

  shippingValue = 5;

  submitCheck = false;

  constructor(private store: Store<fromApp.AppState>, private router: Router) { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      userEmail: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      mobileNumber: new FormControl(null, [Validators.required]),
    });

    this.cartState = this.store.select('cart');
    this.cartItemCountSubscription = this.cartState.subscribe((data) => {
      if (data.cart && data.cart.length) {
        this.cartItems = data.cart;
        this.cartItemCount = data.cart.length;
        this.cartTotal = 0;
        data.cart.forEach((element) => {
          this.cartTotal = parseInt(element.amount, 10) + this.cartTotal;
        });
        this.grandTotal = this.cartTotal + this.shippingValue;
      } else if (this.submitCheck === true && data.cart.length >= 0) {
        this.cartItemCount = 0;
      } else {
        this.router.navigate(['/']);
        this.cartItemCount = 0;
      }
    });
    this.authState = this.store.select('auth');
    this.getUserValueSubscription = this.authState.subscribe((data) => {
      if (data.users) {
        this.checkoutForm.patchValue({
          firstName: data.users.firstName,
          lastName: data.users.lastName,
          userEmail: data.users.email,
        });
      }
    });
  }

  onSubmitted() {
    this.submitCheck = true;
    const FinalValue = {
      firstName: this.checkoutForm.value.firstName,
      lastName: this.checkoutForm.value.lastName,
      email: this.checkoutForm.value.userEmail,
      address: this.checkoutForm.value.address,
      city: this.checkoutForm.value.city,
      state: this.checkoutForm.value.state,
      country: this.checkoutForm.value.country,
      mobileNumber: this.checkoutForm.value.mobileNumber,
      product: JSON.stringify(this.cartItems),
    };
    this.store.dispatch(new CheckoutActions.Checkout(
      FinalValue,
    ));
  }
}
