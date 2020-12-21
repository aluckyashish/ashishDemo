/* eslint-disable no-case-declarations */
import * as OrderActions from './orders.actions';
import { HttpError } from '../app.reducers';

export interface OrderState {
    orders: any;
    errors: Array<HttpError>;
    loading: boolean;
    fetchLoading: boolean;
}

const initialState: OrderState = {
  orders: [],
  errors: [],
  loading: false,
  fetchLoading: false,
};

export function orderReducer(state = initialState, action: OrderActions.OrderActions) {
  switch (action.type) {
    case (OrderActions.FETCH_ORDER_SUCCESS):
      return {
        orders: action.payload.res.data,
        loading: false,
        errors: [],
        fetchLoading: state.fetchLoading,
      };

    default:
      return state;
  }
}
