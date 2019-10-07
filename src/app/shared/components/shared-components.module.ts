import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
    declarations: [
        NavBarComponent,
        ProductListComponent,
        ShoppingCartComponent
    ],
    exports: [
        NavBarComponent,
        ProductListComponent,
        ShoppingCartComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    entryComponents: [
        ShoppingCartComponent
    ]
})
export class SharedComponentModule {}
