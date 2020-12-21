/* eslint-disable no-case-declarations */
import * as ShowcaseActions from './showcase.actions';
import { HttpError } from '../app.reducers';
import { Product, ProductVariantResponse } from '../model';

export interface ShowcaseState {
  newlyAdded: Array<Product>;
  featureProduct: Array<ProductVariantResponse>;
  errors: Array<HttpError>;
  loading: Array<string>;
  imageSlider: any;
}

const initialState: ShowcaseState = {
  newlyAdded: [],
  featureProduct: [],
  errors: [],
  loading: [],
  imageSlider: [],
};

export function showcaseReducer(state = initialState, action: ShowcaseActions.ShowcaseActions) {
  switch (action.type) {
    case (ShowcaseActions.FETCH_FEATURED_PRODUCT):
      const featureProduct = [...state.loading];
      featureProduct.push(ShowcaseActions.FETCH_FEATURED_PRODUCT);
      return {
        ...state,
        loading: featureProduct,
      };

    case (ShowcaseActions.FETCH_FEATURED_PRODUCT_SUCCESS):
      return {
        ...state,
        featureProduct: action.payload.res.data.getFeaturedProduct,
        errors: [...state.errors.filter((error) => error.errorEffect !== action.payload.effect)],
        loading: [...state.loading.filter((loaded) => loaded !== action.payload.effect)],
      };

    case (ShowcaseActions.FETCH_NEWELY_PRODUCT):
      const newProduct = [...state.loading];
      newProduct.push(ShowcaseActions.FETCH_NEWELY_PRODUCT_SUCCESS);
      return {
        ...state,
        loading: newProduct,
      };

    case (ShowcaseActions.FETCH_NEWELY_PRODUCT_SUCCESS):
      return {
        ...state,
        newlyAdded: action.payload.res.data.getLatestProduct,
        errors: [...state.errors.filter((error) => error.errorEffect !== action.payload.effect)],
        loading: [...state.loading.filter((loaded) => loaded !== action.payload.effect)],
      };

    case (ShowcaseActions.FETCH_IMAGE_SLIDER):
      const imageSlider = [...state.loading];
      imageSlider.push(ShowcaseActions.FETCH_IMAGE_SLIDER);
      return {
        ...state,
        loading: imageSlider,
      };

    case (ShowcaseActions.FETCH_IMAGE_SLIDER_SUCCESS):
      return {
        ...state,
        imageSlider: action.payload.res.data.getBanners,
        errors: [...state.errors.filter((error) => error.errorEffect !== action.payload.effect)],
        loading: [...state.loading.filter((loaded) => loaded !== action.payload.effect)],
      };

    case (ShowcaseActions.SHOWCASE_ERROR):
      const errors = [...state.errors];
      const index = errors.findIndex((error) => error.errorEffect === action.payload.errorEffect);
      if (index !== -1) {
        errors[index] = action.payload;
      } else {
        errors.push(action.payload);
      }
      return {
        ...state,
        loading: [...state.loading.filter((loaded) => loaded !== action.payload.errorEffect)],
        errors,
      };

    default:
      return state;
  }
}
