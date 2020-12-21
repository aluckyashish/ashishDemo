import { AuthGuardService } from '../services/auth-guard.service';
import { OrdersComponent } from './orders.component';

export const OrderRoutes = [
  { path: '', component: OrdersComponent, canActivate: [AuthGuardService] },
];
