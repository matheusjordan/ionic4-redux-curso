import { ProductModel } from './product.model';

export class CartModel {
    public products: ProductModel[] = [];
    public total = 0;

    constructor() {

    }

}