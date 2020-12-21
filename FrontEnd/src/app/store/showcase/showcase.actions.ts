/* eslint-disable max-len */
// eslint-disable-next-line max-classes-per-file
import { Action } from '@ngrx/store';
import { HttpError } from '../app.reducers';

export const FETCH_FEATURED_PRODUCT = 'FETCH_FEATURED_PRODUCT';
export const FETCH_FEATURED_PRODUCT_SUCCESS = 'FETCH_FEATURED_PRODUCT_SUCCESS';

export const FETCH_NEWELY_PRODUCT = 'FETCH_NEWELY_PRODUCT';
export const FETCH_NEWELY_PRODUCT_SUCCESS = 'FETCH_NEWELY_PRODUCT_SUCCESS';
export const FETCH_IMAGE_SLIDER = 'FETCH IMAGE SLIDER';
export const FETCH_IMAGE_SLIDER_SUCCESS = 'FETCH IMAGE SLIDER SUCCESS';

export const SHOWCASE_ERROR = 'SHOWCASE_ERROR';

export class FetchFeaturedProduct implements Action {
  readonly type = FETCH_FEATURED_PRODUCT;
}

export class FetchFeaturedProductSuccess implements Action {
  readonly type = FETCH_FEATURED_PRODUCT_SUCCESS;

  constructor(public payload: { res: any, effect: string }) {
  }
}


export class FetchNewProduct implements Action {
  readonly type = FETCH_NEWELY_PRODUCT;
}

export class FetchNewProductSuccess implements Action {
  readonly type = FETCH_NEWELY_PRODUCT_SUCCESS;

  constructor(public payload: { res: any, effect: string }) {
  }
}

export class FetchImageSlider implements Action {
  readonly type = FETCH_IMAGE_SLIDER;
}

export class FetchImageSliderSuccess implements Action {
  readonly type = FETCH_IMAGE_SLIDER_SUCCESS;

  constructor(public payload: { res: any, effect: string }) {
  }
}


export class ShowcaseError implements Action {
  readonly type = SHOWCASE_ERROR;

  constructor(public payload: HttpError) {
  }
}

export type ShowcaseActions = FetchFeaturedProduct | FetchFeaturedProductSuccess | FetchImageSlider | FetchImageSliderSuccess
   | ShowcaseError |FetchNewProduct|FetchNewProductSuccess;
