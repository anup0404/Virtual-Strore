import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: ProductList;
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<boolean>();
  count: number = 1;
  incCount() {
    if (this.count < 10) {
      this.count++;
    } else {
      alert('Sorry out of stock');
    }
  }
  decCount() {
    if (this.count > 0) {
      this.count--;
    }
  }

  public closeBox(): void {
    this.close.emit(false);
  }
}
