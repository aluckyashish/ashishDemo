import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as OrderActions from '../store/orders/orders.actions';

import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  authState: any;

  getUserValueSubscription: any;

  userEmail: any;

  orderState: any;
  products: any;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.orderState = this.store.select('orders');
    this.authState = this.store.select('auth');
    this.getUserValueSubscription = this.authState.subscribe((data) => {
      this.userEmail = data.users.email;
      this.store.dispatch(new OrderActions.FetchOrder({ id: this.userEmail }));
    });
  }
}

