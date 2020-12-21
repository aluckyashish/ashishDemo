
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as ProductActions from './product.action';
import { ProductService } from '../../services/product.service';

@Injectable()
export class CurrentProductEffects {
  @Effect()
  FetchCurrentProduct = this.actions$
    .pipe(ofType(ProductActions.FETCH_CURRENT_PRODUCT),

      map((action: ProductActions.FetchCurrentProduct) => action.payload),
      // eslint-disable-next-line max-len
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line max-len
      // eslint-disable-next-line no-unused-vars
      switchMap((Id: { id: string }) => this.productService.getFullProduct(Id.id)
        .pipe(map((res) => (
          {
            type: ProductActions.FETCH_CURRENT_PRODUCT_SUCCESS,
            payload: { res, effect: ProductActions.FETCH_CURRENT_PRODUCT },
          })))));

  constructor(
    private actions$: Actions,
    private productService: ProductService) {
  }
}
