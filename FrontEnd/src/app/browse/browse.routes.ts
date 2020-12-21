import { BrowseComponent } from './browse.component';
import { Routes } from '@angular/router';

export const BrowseRoutes: Routes = [
  { path: 'category/:name', component: BrowseComponent }
];
