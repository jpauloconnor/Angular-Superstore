import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit() {
  }

  getProdcuts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products.slice(1, 5));
  }
}
