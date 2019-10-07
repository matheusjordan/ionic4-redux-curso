import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';
import { CartModel } from '../../models/cart.model';
import { Observable, pipe } from 'rxjs';
import { Remove, Clear } from '../../actions/cart.action';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor(
    private store: Store<CartModel>,
    private alertCrtl: AlertController
  ) {
    this.cart$ =  this.store.pipe(
        select('cart')
      );
  }

  ngOnInit() {}

  async showConfirmClearModal() {
    const alert = await this.alertCrtl.create({
      header: 'Limpar carrinho',
      message: 'Deseja limpar o carrinho ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Limpar',
          handler: () => this.clear()
        }
      ]
    });

    return await alert.present();
  }

  async showConfirmRemoveModal(product: any) {
    const alert = await this.alertCrtl.create({
      header: 'Remover Item',
      message: `Deseja remover o item ${product.title} do carrinho ?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Remover',
          handler: () => this.remove(product)
        }
      ]
    });

    return await alert.present();
  }

  private remove(product: any) {
    this.store.dispatch(Remove(product));
  }

  private clear() {
    this.store.dispatch(Clear());
  }
}
