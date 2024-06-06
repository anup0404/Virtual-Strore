import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductFormService } from 'src/app/Services/product-form.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productformservice:ProductFormService
  ) {}

  productForm = this.fb.group({
    thumbnail: ['', Validators.required],
    title: ['', [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(0.01)]],
    rating: [null, [Validators.required, Validators.min(0), Validators.max(5)]],
    description: ['', Validators.required],
    brand: ['', Validators.required],
    weight: [null, [Validators.required, Validators.min(0)]],
    returnPolicy: ['', Validators.required],
    warrantyInformation: ['', Validators.required],
    availabilityStatus: ['InStock', Validators.required],
    minimumOrderQuantity: [1, [Validators.required, Validators.min(1)]],
    stock: [1, [Validators.required, Validators.min(0)]],
    dimensions: this.fb.group({
      width: [null, [Validators.required, Validators.min(0)]],
      height: [null, [Validators.required, Validators.min(0)]],
      depth: [null, [Validators.required, Validators.min(0)]],
    })
  })
  


  onSubmit() {
    this.productformservice.productFormData.unshift(this.productForm.value);
    const productFormData=this.productForm.value;
    this.router.navigate(['/product'], {state:{productFormData:productFormData}});
  }
}
