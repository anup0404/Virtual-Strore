import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  @Input() updateProductData!:ProductList;
  @Output() applyProductUpdate: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder) {}
  productForm = this.fb.group({
    thumbnail: [''],
    title: [''],
    price:this.fb.control<number|null>(null, Validators.required),
    rating:[null as number| null | undefined],
    description: [''],
    brand: [''],
    weight: [0],
    returnPolicy: [''],
    warrantyInformation: [''],
    availabilityStatus: ['InStock'], 
    minimumOrderQuantity: [1],
    stock: [0],
    dimensions: this.fb.group({
      width: [0],
      height: [0],
      depth: [0],
    }),
  });

  ngOnInit() {
    if (this.updateProductData) {
      this.productForm.patchValue({
        thumbnail: this.updateProductData.thumbnail,
        title: this.updateProductData.title,
        price:this.updateProductData.price,
        rating: this.updateProductData.rating,
        description: this.updateProductData.description,
        brand: this.updateProductData.brand,
        weight: this.updateProductData.weight,
        returnPolicy: this.updateProductData.returnPolicy,
        warrantyInformation: this.updateProductData.warrantyInformation,
        availabilityStatus: this.updateProductData.availabilityStatus,
        minimumOrderQuantity: this.updateProductData.minimumOrderQuantity,
        stock: this.updateProductData.stock,
        dimensions: {
          width: this.updateProductData.dimensions.width,
          height: this.updateProductData.dimensions.height,
          depth: this.updateProductData.dimensions.depth,
        },
      });
    }
  }

  updateProduct() {
    const updatedProduct = this.productForm.value;
   this.applyProductUpdate.emit(updatedProduct);
  }
}
