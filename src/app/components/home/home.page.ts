import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { CartModel } from '../../shared/models/cart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cart$: Observable<CartModel>;

  constructor(
    private store: Store<CartModel>
  ) {
    this.cart$ = this.store.pipe(
      select('cart')
    );
  }
}
