import { ActionReducerMap } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import * as fromCart from './cart/cart.reducer';
import * as fromAuth from './auth/auth.reducer';
import * as fromShowcase from './showcase/showcase.reducer';

import * as fromCurrentProductcase from './product/product.reducer';
import * as fromBrowse from './browse/browse.reducer';
import * as fromOrders from './orders/orders.reducer';

export interface HttpError {
  error: HttpErrorResponse;
  errorEffect: string;
}

export interface AppState {
  currentProduct: fromCurrentProductcase.CurrentProductState;
  cart: fromCart.CartState;
  auth: fromAuth.AuthState;
  showcase: fromShowcase.ShowcaseState;
  browse: fromBrowse.BrowseState;
  orders: fromOrders.OrderState;
}

export const reducers: ActionReducerMap<AppState> = {
  currentProduct: fromCurrentProductcase.currentProductReducer,
  cart: fromCart.cartReducer,
  auth: fromAuth.authReducer,
  showcase: fromShowcase.showcaseReducer,
  browse: fromBrowse.browseReducer,
  orders: fromOrders.orderReducer,
};
