/* eslint-disable import/no-unresolved */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { localStorageSync } from 'ngrx-store-localstorage';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// eslint-disable-next-line import/no-unresolved
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { FooterModule } from './footer/footer.module';
import { AppRoutes } from './app.routes';
// eslint-disable-next-line import/no-unresolved
import { GPageNotFoundComponent } from './g-page-not-found/g-page-not-found.component';
import { BrowseModule } from './browse/browse.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProductService } from './services/product.service';
import { reducers } from './store/app.reducers';
import { TokenService } from './services/token.service';
import { AuthEffects } from './store/auth/auth.effects';
import { TokenInterceptor } from './services/token.interceptor';
import { AuthGuardService } from './services/auth-guard.service';
import { ShowcaseEffects } from './store/showcase/showcase.effects';
import { AccountService } from './services/account.service';
import { BrowseEffects } from './store/browse/browse.effects';
import { NonAuthGuardService } from './services/non-auth-guard.service';
import { GraphQLModule } from './graphql.module';

import { CheckoutEffects } from './store/checkout/checkout.effect';
import { CurrentProductEffects } from './store/product/product.effect';
import { CheckoutService } from './services/checkout.service';
import { GetOrderEffects } from './store/orders/orders.effect';
import { OrdersService } from './services/orders.services';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['cart', 'auth'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    GPageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    HomeModule,
    BrowseModule,
    ProductDetailModule,

    AuthModule,
    // FaqModule, lazy loaded module not imported here
    FooterModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      CheckoutEffects,
      AuthEffects,
      ShowcaseEffects,
      CurrentProductEffects,
      GetOrderEffects,
      BrowseEffects]),
    RouterModule.forRoot(AppRoutes, { useHash: false, preloadingStrategy: PreloadAllModules }),
    GraphQLModule,
    StoreDevtoolsModule.instrument({
      name: 'Ecommerce App HCL',
    }),
  ],
  providers: [ProductService,
    TokenService,
    AuthGuardService,
    CheckoutService,
    NonAuthGuardService,
    OrdersService,
    AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
