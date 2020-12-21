import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducers';
import * as ShowcaseActions from '../../store/showcase/showcase.actions';
import { ShowcaseState } from '../../store/showcase/showcase.reducer';

@Component({
  selector: 'app-featured-added',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss'],
})
export class FeaturedProductComponent implements OnInit {
  showcaseState: Observable<ShowcaseState>;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.showcaseState = this.store.select('showcase');
    this.showcaseState
      .pipe(take(1))
      .subscribe(
        (data) => {
          if (data.featureProduct.length === 0) {
            this.store.dispatch(new ShowcaseActions.FetchFeaturedProduct());
          }
        },
      );
  }
}
