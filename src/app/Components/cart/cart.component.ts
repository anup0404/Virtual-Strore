import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  quantity: number = 1;
  public product: ProductList[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.product = this.cartService.cartItemList;
  }

  removeItem(item: ProductList, index: number): void {
    this.cartService.removeCartItem(item, index);
  }

  emptyCartItems(): void {
    this.cartService.removeAllCartItem();
    window.location.reload();
  }

  subTotalPrice(): number {
    return Number(this.cartService.subTotal().toFixed(2));
  }
  grandTotal(): number {
    if (this.product) {
      return this.subTotalPrice() + 50;
    }
    return 0;
  }

  public increment(item: ProductList, index: number): void {
    if (item.minimumOrderQuantity <= item.stock) {
      item.minimumOrderQuantity++;
      this.cartService.totalItems++;
    }
  }

  public decrement(item: ProductList, index: number): void {
    if (item.minimumOrderQuantity > 0) {
      item.minimumOrderQuantity--;
      this.cartService.totalItems--;
    }
    if (item.minimumOrderQuantity === 0) {
      this.cartService.removeCartItem(item, index);
    }
  }
}
