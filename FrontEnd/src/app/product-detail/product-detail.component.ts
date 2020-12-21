/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable padded-blocks */
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute, NavigationEnd, Params, Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, throwError } from 'rxjs';
import { LocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, take } from 'rxjs/operators';
import * as CartActions from '../store/cart/cart.actions';
import * as fromApp from '../store/app.reducers';
import { ProductService } from '../services/product.service';
import { CartState } from '../store/cart/cart.reducer';
import { CurrentProductState } from '../store/product/product.reducer';
import * as CurrentProductActions from '../store/product/product.action';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  paramSubscription: Subscription;

  productQuantity: number;

  product: any;

  cartState: Observable<CartState>;

  productState: Observable<CurrentProductState>;

  innerLoading = true;

  productUrl: string;

  variant: number;

  isPopState = false;

  fetchError: HttpErrorResponse = null;

  routerSubscription: Subscription;

  activeTab = 0;

  cartValue: any = [];

  continueAddtoCart = true;

  isShow: boolean;

  topPosToStartShowing = 100;

  currentProductState: Observable<CurrentProductState>;

  cartSuccess = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
  ) {
  }

  ngOnInit() {
    this.cartSuccess = false;
    this.gotoTop();
    this.cartState = this.store.select('cart');

    this.currentProductState = this.store.select('currentProduct');
    this.cartState.subscribe((data) => { if (data.cart) { this.cartValue = data.cart; } });
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.productUrl = params.productUrl;

        this.innerLoading = true;
        this.product = { id: this.productUrl };
        this.checkCartProduct();
        this.store.dispatch(new CurrentProductActions.FetchCurrentProduct({ id: this.productUrl }));

      },
    );
  }

  ngOnDestroy() {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  checkCartProduct() {
    const selProd = this.cartValue.find((p) => p.id === this.product.id);
    if (selProd) {
      this.continueAddtoCart = false;
    }
  }

  addToCart(id, image, name, price, amountElement: HTMLInputElement) {
    const amount = amountElement.value;
    if (parseInt(amount, 10) < 1) {
      alert('Please put right quantity');
      return;
    }
    let finalPrice=parseInt(amount,10)*price;
    this.store.dispatch(new CartActions.AddToCart({
      id, image, name, amount: finalPrice, qty: amount, basePrice: price,
    }));
    this.product = { id };
    this.cartSuccess = true;
    this.gotoTop();
    this.checkCartProduct();
  }
}
