import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs/operators';
import * as AuthActions from '../store/auth/auth.actions';
import * as CartActions from '../store/cart/cart.actions';
import * as fromApp from '../store/app.reducers';
import { CartState } from '../store/cart/cart.reducer';
import { AuthState } from '../store/auth/auth.reducer';

import * as BrowseActions from '../store/browse/browse.actions';
import { BrowseState } from '../store/browse/browse.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbDropdownConfig],
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartState: Observable<CartState>;

  authState: Observable<AuthState>;

  browseState: Observable<BrowseState>;

  cartItemCountSubscription: Subscription;

  cartItemCount = 0;

  isCollapsed = true;

  authStateSubscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute,
    public dropdownConfig: NgbDropdownConfig,
  ) {
    dropdownConfig.placement = 'bottom-right';
  }

  ngOnInit() {
    this.browseState = this.store.select('browse');

    this.authState = this.store.select('auth');
    this.cartState = this.store.select('cart');

    this.store.dispatch(new BrowseActions.FetchCategory());

    this.authStateSubscription = this.authState
      .subscribe((data) => {
        if (data.authenticated) {
          this.store.dispatch(new CartActions.FetchCart());
          this.cartItemCountSubscription = this.cartState.subscribe((dataCart) => {
            if (dataCart.cart && dataCart.cart.cartItems && dataCart.cart.cartItems.length) {
              this.cartItemCount = dataCart.cart.cartItems.reduce((total, cartItem) => total + cartItem.amount, 0);
            } else {
              this.cartItemCount = 0;
            }
          });
        } else if (this.cartItemCountSubscription) {
          this.cartItemCountSubscription.unsubscribe();
        }
      });
  }

  ngOnDestroy() {
    if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
    }
    if (this.cartItemCountSubscription) {
      this.cartItemCountSubscription.unsubscribe();
    }
  }

  userSignOut() {
    this.store.dispatch(new AuthActions.SignOut());
    this.router.navigate(['/']);
  }
}
