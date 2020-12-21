import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ShowcaseActions from './showcase.actions';
import { ProductService } from '../../services/product.service';

@Injectable()
export class ShowcaseEffects {
  @Effect()
  FetchFeaturedProduct = this.actions$
    .pipe(ofType(ShowcaseActions.FETCH_FEATURED_PRODUCT),
      switchMap((action: ShowcaseActions.FetchFeaturedProduct) => this.productService.getFeaturedProduct()
        .pipe(map((res) => (
          {
            type: ShowcaseActions.FETCH_FEATURED_PRODUCT_SUCCESS,
            payload: { res, effect: ShowcaseActions.FETCH_FEATURED_PRODUCT },
          })),
          catchError((error) => of(new ShowcaseActions.ShowcaseError(
            { error, errorEffect: ShowcaseActions.FETCH_FEATURED_PRODUCT },
          ))))));

  @Effect()
  FetchNewProduct = this.actions$
    .pipe(ofType(ShowcaseActions.FETCH_NEWELY_PRODUCT),
      switchMap((action: ShowcaseActions.FetchFeaturedProduct) => this.productService.getNewProduct()
        .pipe(map((res) => (
          {
            type: ShowcaseActions.FETCH_NEWELY_PRODUCT_SUCCESS,
            payload: { res, effect: ShowcaseActions.FETCH_NEWELY_PRODUCT },
          })),
          catchError((error) => of(new ShowcaseActions.ShowcaseError(
            { error, errorEffect: ShowcaseActions.FETCH_NEWELY_PRODUCT },
          ))))));

  @Effect()
  fetchImageSlider = this.actions$
    .pipe(ofType(ShowcaseActions.FETCH_IMAGE_SLIDER),
      switchMap((action: ShowcaseActions.FetchImageSlider) => this.productService.getImageSlider()
        .pipe(map((res) => (
          {
            type: ShowcaseActions.FETCH_IMAGE_SLIDER_SUCCESS,
            payload: { res, effect: ShowcaseActions.FETCH_IMAGE_SLIDER },
          })),
          catchError((error) => of(new ShowcaseActions.ShowcaseError(
            { error, errorEffect: ShowcaseActions.FETCH_IMAGE_SLIDER },
          ))))));

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {
  }
}
