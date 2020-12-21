import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { LatestArrivalComponent } from './latest-arrival/latest-arrival.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    NgbModule
  ],
  declarations: [
    HomeComponent,
    FeaturedProductComponent,
    ImageSliderComponent,
    LatestArrivalComponent  ]
})
export class HomeModule {
}
