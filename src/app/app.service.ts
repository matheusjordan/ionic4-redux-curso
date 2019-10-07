import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductModel } from './shared/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private url = 'http://23098105.ngrok.io/v1';
    private endpoint = '/products';
    private fullUrl = this.url + this.endpoint;

    constructor(private htpp: HttpClient) {
    }

    getProducts() {
        return this.htpp.get<ProductModel[]>(this.fullUrl);
    }
}
