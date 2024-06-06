import { Injectable } from '@angular/core';
import { ProductList } from '../product-list';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: ProductList[] = [];
  totalItems: number = 0;
  constructor() {}

  addtoCart(product: ProductList) {
    const isDuplicate = this.cartItemList.some(
      (item: ProductList) => item.id === product.id
    );
    if (!isDuplicate) {
      this.cartItemList.push(product);
      this.totalItems += product.minimumOrderQuantity;
    } else {
      this.totalItems++;
    }
  }

  removeCartItem(product: ProductList, index: number) {
    this.cartItemList.splice(index, 1);
    this.totalItems -= product.minimumOrderQuantity;
  }

  removeAllCartItem() {
    this.cartItemList = [];
  }

  subTotal(): number {
    let subtotal = 0;
    this.cartItemList.forEach((item: ProductList) => {
      subtotal += item.price * item.minimumOrderQuantity;
    });
    return subtotal;
  }
}
