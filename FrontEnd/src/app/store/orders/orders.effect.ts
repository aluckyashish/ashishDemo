/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as OrderActions from './orders.actions';
import { OrdersService } from 'src/app/services/orders.services';


@Injectable()
export class GetOrderEffects {
  @Effect()
  FetchOrders = this.actions$
    .pipe(ofType(OrderActions.FETCH_ORDER),

      map((action: OrderActions.FetchOrder) => action.payload),

      switchMap((Id: { id: string }) => this.ordersService.getOrders(Id.id)
        .pipe(map((res) => (
          {
            type: OrderActions.FETCH_ORDER_SUCCESS,
            payload: { res, effect: OrderActions.FETCH_ORDER },
          })))));

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService) {
  }
}
