import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';


export const ProductDetailRoutes: Routes = [
  { path: 'product/detail/:productUrl', component: ProductDetailComponent }
];

