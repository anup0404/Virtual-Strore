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
  public product: any = [];
  public grandTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptyCart() {
    this.cartService.removeAllCart();
  }
  public increment(): void {
    if (this.quantity <= 10) {
      this.quantity++;
    } else {
      alert('Sorry out of stock');
    }
  }

  public decrement(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}
