import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartModel } from '../../models/cart.model';
import { Store, select } from '@ngrx/store';
import { PopoverController } from '@ionic/angular';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  cart$: Observable<CartModel>;

  constructor(
    private store: Store<CartModel>,
    private popoverCtrl: PopoverController
  ) {
    this.cart$ = store.pipe(
      select('cart'),
    );
   }

  ngOnInit() {}

  async showShoppingCart(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ShoppingCartComponent,
      translucent: true,
      event: ev
    });

    return await popover.present();
  }

}
