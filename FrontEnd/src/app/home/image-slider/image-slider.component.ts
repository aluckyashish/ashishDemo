import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ShowcaseState } from 'src/app/store/showcase/showcase.reducer';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducers';
import * as ShowcaseActions from '../../store/showcase/showcase.actions';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  providers: [NgbCarouselConfig],
})
export class ImageSliderComponent implements OnInit {
  showcaseState: Observable<ShowcaseState>;

  carausel: Array<any>;

  constructor(config: NgbCarouselConfig, private store: Store<fromApp.AppState>) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
    this.showcaseState = this.store.select('showcase');
    this.showcaseState
      .pipe(take(1))
      .subscribe(
        (data) => {
          if (data.imageSlider.length === 0) {
            this.store.dispatch(new ShowcaseActions.FetchImageSlider());
          }
        },
      );
    // this.carausel = this.config.carausel;
  }
}
