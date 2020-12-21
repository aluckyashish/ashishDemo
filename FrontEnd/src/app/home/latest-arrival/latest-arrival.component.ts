import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducers';
import * as ShowcaseActions from '../../store/showcase/showcase.actions';
import { ShowcaseState } from '../../store/showcase/showcase.reducer';
@Component({
  selector: 'app-latest-arrival',
  templateUrl: './latest-arrival.component.html',
  styleUrls: ['./latest-arrival.component.scss'],
})
export class LatestArrivalComponent implements OnInit {
  showcaseState: Observable<ShowcaseState>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.showcaseState = this.store.select('showcase');
    this.showcaseState
      .pipe(take(1))
      .subscribe(
        (data) => {
          if (data.newlyAdded.length === 0) {
            this.store.dispatch(new ShowcaseActions.FetchNewProduct());
          }
        },
      );
  }
}
