/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import {
  Component, HostListener, OnDestroy, OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import * as BrowseActions from '../store/browse/browse.actions';
import * as fromApp from '../store/app.reducers';
import { BrowseState } from '../store/browse/browse.reducer';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit, OnDestroy {
  sortBy = [
    {
      display: 'Lowest Price',
      value: 'lowest',
    },
    {
      display: 'Highest Price',
      value: 'highest',
    },
  ];

  browseOptionsForm: FormGroup;

  browseState: Observable<BrowseState>;

  canFetchSubscription: Subscription;

  canFetch = false;

  selectedSort = 'lowest';

  categoryName: any;

  currentCategory: any;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.browseState = this.store.select('browse');
    this.categoryName = this.route.snapshot.paramMap.get('name');
    this.route.params.subscribe((params) => {
      this.selectedSort = 'lowest';
      this.currentCategory = params.name;
      this.geAllProduct(this.selectedSort);
    });
  }

  geAllProduct(sortType: any) {
    this.canFetchSubscription = this.browseState.pipe(take(1)).subscribe((data) => {
      this.selectedSort = data.selectedSort;
      this.getProducts(sortType, this.currentCategory);
    });
  }

  ngOnDestroy(): void {
    if (this.canFetchSubscription) {
      this.canFetchSubscription.unsubscribe();
    }
  }

  selectSort(sort: string) {
    this.selectedSort = sort;
    this.geAllProduct(sort);
  }

  getProducts(sortType, categoryName) {
    this.store.dispatch(new BrowseActions.FetchProducts(
      {
        sort: sortType,
        category: categoryName,
      },
    ));
  }
}
