/* eslint-disable radix */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromApp from '../store/app.reducers';
import * as CartActions from '../store/cart/cart.actions';
import { CartState } from '../store/cart/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartState: Observable<CartState>;

  cartItemCountSubscription: Subscription;

  showDiscountInput = false;

  shippingValue = 50;

  grandTotal = 0;

  applyCodeShow = false;

  cartItemCount = 0;

  cartTotal = 0;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.cartState = this.store.select('cart');
    this.cartItemCountSubscription = this.cartState.subscribe((data) => {
      if (data.cart && data.cart.length) {
        this.cartItemCount = data.cart.length;
        this.cartTotal = 0;
        data.cart.forEach((element) => {
          this.cartTotal = parseInt(element.amount, 10) + this.cartTotal;
        });
        this.grandTotal = this.cartTotal + this.shippingValue;
      } else {
        this.cartItemCount = 0;
      }
    });
  }

  ngOnDestroy() {
    if (this.cartItemCountSubscription) {
      this.cartItemCountSubscription.unsubscribe();
    }
  }

  goToItem(productUrl) {
    this.router.navigate(['/detail/', productUrl], { relativeTo: this.route });
  }

  removeFromCart(id: number) {
    this.store.dispatch(new CartActions.RemoveFromCart({ id }));
  }

  qtyIncrement(id: number, quantity: any) {
    const setQuantity = parseInt(quantity, 10) + 1;
    this.store.dispatch(new CartActions.IncrementCart({ id, qty: setQuantity }));
  }

  qtyDecrement(id: number, quantity) {
    const setQuantity = parseInt(quantity, 10) - 1;
    this.store.dispatch(new CartActions.DecrementCart({ id, qty: setQuantity }));
  }
}
