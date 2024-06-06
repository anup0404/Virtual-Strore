import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductFormService {
  constructor() {}
  productFormData: any = [];
  public updatedProductData: any = {};
  public productId!:number;


    addProducts(productData: any[]) {
    this.productFormData.forEach((item: any) => {
      productData.unshift(item);
    });
    
  } 
}
