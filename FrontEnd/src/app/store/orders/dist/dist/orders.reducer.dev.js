"use strict";

exports.__esModule = true;
exports.orderReducer = void 0;
/* eslint-disable no-case-declarations */

var OrderActions = require('./orders.actions');

var initialState = {
  orders: [],
  errors: [],
  loading: false,
  fetchLoading: false
};

function orderReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  switch (action.type) {
    case OrderActions.FETCH_ORDER_SUCCESS:
      return {
        orders: action.payload.res.data,
        loading: false,
        errors: [],
        fetchLoading: state.fetchLoading
      };

    default:
      return state;
  }
}

exports.orderReducer = orderReducer;