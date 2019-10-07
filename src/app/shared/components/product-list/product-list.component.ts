import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store, select } from '@ngrx/store';

import { AppService } from '../../../app.service';
import { CartModel } from '../../models/cart.model';
import { Add } from '../../actions/cart.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = null;
  times = [1, 2, 3, 4];

  constructor(
    private toastCtrl: ToastController,
    private appService: AppService,
    private store: Store<CartModel>
  ) { }

  ngOnInit() {
    this.appService.getProducts().subscribe(
      (data: any) => {
        this.products = data;
      }
    );
  }

  async add(product: any) {
    this.store.dispatch(Add(product));
    this.showSucessToast(product.title);
  }

  private async showSucessToast(productTitle: string) {
    const toast = await this.toastCtrl.create({
      message: `Produto ${productTitle} Adicionado ao carrinho`,
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'ok'
    });

    return await toast.present();
  }
}
