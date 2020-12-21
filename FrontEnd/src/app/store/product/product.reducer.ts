/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable default-case */
/* eslint-disable no-case-declarations */

import * as ProductActions from './product.action';

export interface CurrentProductState {
  currentProduct: any;
}

const initialState: CurrentProductState = {
  currentProduct: null,
};

export function currentProductReducer(state = initialState, action: ProductActions.CurrentProductActions) {
  switch (action.type) {
    case (ProductActions.FETCH_CURRENT_PRODUCT):
      let currentProduct = '';
      currentProduct = ProductActions.FETCH_CURRENT_PRODUCT;
      return {
        ...state,
        loading: currentProduct,
      };

    case (ProductActions.FETCH_CURRENT_PRODUCT_SUCCESS):
      return {
        ...state,
        currentProduct: action.payload.res.data.getProductById,
      };
    default:
      return state;
  }
}
