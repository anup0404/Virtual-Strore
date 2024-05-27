import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  count: number = 1;
  product: any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.product = history.state;
    console.log(this.product);
  }
}
