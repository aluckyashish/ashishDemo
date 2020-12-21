/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError, map, mergeMap, switchMap,
} from 'rxjs/operators';
import * as BrowseActions from './browse.actions';
import { ProductService } from '../../services/product.service';

@Injectable()
export class BrowseEffects {
  @Effect()
  fetchProducts = this.actions$
    .pipe(ofType(BrowseActions.FETCH_PRODUCTS),
      map((action: BrowseActions.FetchProducts) => action.payload),
      switchMap((params: { category: string, sort: string }) => this.productService.getProducts(params.sort, params.category)
        .pipe(map((res) => ({
          type: BrowseActions.FETCH_PRODUCTS_SUCCESS,
          payload: {
            res,
            effect: BrowseActions.FETCH_PRODUCTS,
          },
        })), catchError((error) => of(new BrowseActions.BrowseError({ error, errorEffect: BrowseActions.FETCH_PRODUCTS }))))));

  @Effect()
  fetchCategory = this.actions$
    .pipe(ofType(BrowseActions.FETCH_CATEGORY),
      switchMap((action: BrowseActions.FetchCategory) => this.productService.getCategory()
        .pipe(map((res) => ({
          type: BrowseActions.FETCH_CATEGORY_SUCCESS,
          payload: { res, effect: BrowseActions.FETCH_CATEGORY },
        })), catchError((error) => of(new BrowseActions.BrowseError({ error, errorEffect: BrowseActions.FETCH_CATEGORY }))))));

  constructor(private actions$: Actions, private productService: ProductService) {
  }
}
