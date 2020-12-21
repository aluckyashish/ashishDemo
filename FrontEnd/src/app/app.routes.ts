import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GPageNotFoundComponent } from './g-page-not-found/g-page-not-found.component';

export const AppRoutes: Routes = [
  { path: 'not-found', component: GPageNotFoundComponent, data: { message: 'Page not found!' } },
  { path: 'about', component: AboutComponent },
  { path: 'account', loadChildren: './account/account.module#AccountModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: 'orders', loadChildren: './orders/orders.module#OrderModule' },
  { path: '**', redirectTo: '/not-found' }
];

