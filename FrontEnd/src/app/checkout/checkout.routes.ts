import { CheckoutComponent } from './checkout.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { SuccessComponent } from './success/success.component';

export const CheckoutRoutes = [

  { path: '', component: CheckoutComponent, canActivate: [AuthGuardService] },
  {
    path: 'success',
    component: SuccessComponent,
    canActivate: [AuthGuardService],

  },
];
