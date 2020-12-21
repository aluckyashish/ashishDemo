/* eslint-disable max-len */
// eslint-disable-next-line max-classes-per-file
import { Action } from '@ngrx/store';

export const FETCH_CURRENT_PRODUCT = 'FETCH_CURRENT_PRODUCT';
export const FETCH_CURRENT_PRODUCT_SUCCESS = 'FETCH_CURRENT_PRODUCT_SUCCESS';

export class FetchCurrentProduct implements Action {
    readonly type = FETCH_CURRENT_PRODUCT;

    constructor(public payload: any) {
    }
}

export class FetchCurrentProductSuccess implements Action {
    readonly type = FETCH_CURRENT_PRODUCT_SUCCESS;

    constructor(public payload: any) {
    }
}

export type CurrentProductActions = FetchCurrentProduct | FetchCurrentProductSuccess;
