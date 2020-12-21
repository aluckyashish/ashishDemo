import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { ProductDetailRoutes } from './product-detail.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProductDetailRoutes),
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [ProductDetailComponent],
  providers: []
})
export class ProductDetailModule {
}
