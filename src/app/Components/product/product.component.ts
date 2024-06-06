import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { PhonesDataService } from 'src/app/Services/phones-data.service';
import { ProductFormService } from 'src/app/Services/product-form.service';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private baseProductUrl: string =
    'https://mocki.io/v1/b5e02b26-a900-4db5-b4a6-381965b92e4f';
  productData: ProductList[] = [];
  searchList: string = '';
  updateProductData!: ProductList;
  updateProductId: number = -1;
  showUpdateForm: boolean = false;

  constructor(
    private phoneData: PhonesDataService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private productFormService: ProductFormService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchList = params['search'] || '';
    });
    this.fetchData();
  }

  fetchData(): void {
    const productUrl = `${this.baseProductUrl}${this.searchList}`;
    this.phoneData.getData(productUrl).subscribe({
      next: (response: any) => {
        this.productData = response.products || [];
        this.productFormService.addProducts(this.productData);
      },
      error: (err: any) => {
        console.error('Error fetching product data', err);
      },
    });
  }

  addToCart(item: ProductList): void {
    this.cartService.addtoCart(item);
  }

  delete(index: number): void {
    this.productData.splice(index, 1);
  }

  updateProduct(item: ProductList, index: number): void {
    this.updateProductData = item;
    this.updateProductId = index;
    this.showUpdateForm = true;
  }
  applyProductUpdate(updateProductData: ProductList) {
    this.productData[this.updateProductId] = updateProductData;
    this.showUpdateForm = false;
  }
}
