import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders.component';
import { OrderRoutes } from './orders.routes';
import { ParseJsonPipe } from './parse-json.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(OrderRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [OrdersComponent, ParseJsonPipe]
})
export class OrderModule {
}
