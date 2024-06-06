import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  count: number = 1;
  product!:ProductList;
  constructor(private router: Router, private cartServices: CartService) {}

  ngOnInit() {
    this.product = history.state;
    console.log("details :",this.product)
  }

  addToCart(item: ProductList) {
    this.cartServices.addtoCart(item);
  }
}
