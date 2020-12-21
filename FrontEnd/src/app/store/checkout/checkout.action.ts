import { Action } from '@ngrx/store';
import { HttpError } from '../app.reducers';

export const CHECKOUT = 'CHECKOUT';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECK_IF_LOGGED_IN = 'CHECK_IF_LOGGED_IN';
export const FETCH_USER_INFO = 'FETCH_USER_INFO';
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';

export class Checkout implements Action {
    readonly type = CHECKOUT;
    constructor(public payload: any) {
    }
}

export class CheckoutSuccess implements Action {
    readonly type = CHECKOUT_SUCCESS;
    constructor(public payload: any) {
    }
}

export class FetchUserInfo implements Action {
    readonly type = FETCH_USER_INFO;
}

export class FetchUserInfoSuccess implements Action {
    readonly type = FETCH_USER_INFO_SUCCESS;
    constructor(public payload: boolean) {
    }
}
export type CheckoutActions = Checkout | CheckoutSuccess | FetchUserInfo | FetchUserInfoSuccess;
