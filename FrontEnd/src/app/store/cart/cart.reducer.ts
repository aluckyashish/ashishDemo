/* eslint-disable no-case-declarations */
import { act } from '@ngrx/effects';
import * as CartActions from './cart.actions';
import { HttpError } from '../app.reducers';
import { Cart } from '../model';

export interface CartState {
  cart: any;
  errors: Array<HttpError>;
  loading: boolean;
  fetchLoading: boolean;
}

const initialState: CartState = {
  cart: [],
  errors: [],
  loading: false,
  fetchLoading: false,
};

export function cartReducer(state = initialState, action: CartActions.CartActions) {
  switch (action.type) {
    case (CartActions.ADD_TO_CART):
      const newCart = [...state.cart, action.payload];

      return {
        cart: newCart,
        loading: false,
        errors: [],
        fetchLoading: state.fetchLoading,
      };

    case (CartActions.FETCH_CART):
      return {
        ...state,
        fetchLoading: true,
      };

    case (CartActions.FETCH_CART_SUCCESS):
      return {
        cart: action.payload.cart,
        errors: [...state.errors.filter((error) => error.errorEffect !== action.payload.effect)],
        loading: false,
        fetchLoading: false,
      };

    case (CartActions.ADD_TO_CART):
    case (CartActions.REMOVE_FROM_CART):
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
        loading: false,
      };

    case (CartActions.INCREMENT_CART):
      const currentCart = [...state.cart];
      const cartUpdateindexInc = currentCart.findIndex((item, i) => item.id === action.payload.id);

      return {
        ...state,
        cart: state.cart.map(
          (cart: any, i: number) => (i === cartUpdateindexInc ? {
            ...cart,
            qty: action.payload.qty,
            amount: state.cart[cartUpdateindexInc].basePrice * action.payload.qty,
          }
            : cart),
        ),
        loading: false,
      };

    case (CartActions.DECREMENT_CART):
      const currentCartDec = [...state.cart];
      const cartUpdateindex = currentCartDec.findIndex((item, i) => item.id === action.payload.id);

      return {
        ...state,
        cart: state.cart.map(
          (cart: any, i: number) => (i === cartUpdateindex ? { ...cart, qty: action.payload.qty, amount: state.cart[cartUpdateindex].basePrice * action.payload.qty }
            : cart),
        ),
        loading: false,
      };

    case (CartActions.CART_ERROR):
      const errors = [...state.errors];
      const index = errors.findIndex((error) => error.errorEffect === action.payload.errorEffect);
      if (index !== -1) {
        errors[index] = action.payload;
      } else {
        errors.push(action.payload);
      }
      return {
        ...state,
        loading: false,
        errors,
      };

    case (CartActions.EMPTY_CART_SUCCESS):
      return initialState;

    default:
      return state;
  }
}
