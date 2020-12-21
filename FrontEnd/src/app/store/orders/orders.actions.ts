/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-useless-constructor */
import { Action } from '@ngrx/store';
import { HttpError } from '../app.reducers';

export const FETCH_ORDER = 'FETCH_ORDER';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';

export class FetchOrder implements Action {
  readonly type = FETCH_ORDER;

  constructor(public payload: any) {
  }
}

export class FetchOrderSuccess implements Action {
  readonly type = FETCH_ORDER_SUCCESS;

  constructor(public payload: any) {
  }
}

export type OrderActions = FetchOrder | FetchOrderSuccess;
