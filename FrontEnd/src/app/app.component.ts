import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './store/auth/auth.actions';
import * as fromApp from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.title = 'Ashish Demo';
    this.store.dispatch(new AuthActions.CheckIfLoggedIn());
  }
}
