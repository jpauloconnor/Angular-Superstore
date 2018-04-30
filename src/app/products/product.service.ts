import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './product-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
    
  }
}
