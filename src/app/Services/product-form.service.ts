import { Injectable } from '@angular/core';
import { ProductList } from '../product-list';

@Injectable({
  providedIn: 'root',
})
export class ProductFormService {
  constructor() {}
  productFormData:any = [];
  public updatedProductData:any = {};
  public productId!:number;


    addProducts(productData: ProductList[]) {
    this.productFormData.forEach((item: ProductList) => {
      productData.unshift(item);
    });
    
  } 
}
