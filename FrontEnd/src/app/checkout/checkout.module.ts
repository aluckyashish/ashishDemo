import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutes } from './checkout.routes';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(CheckoutRoutes),
    FormsModule,
    NgbModule,
  ],
  declarations: [CheckoutComponent, SuccessComponent],
})
export class CheckoutModule {
}
