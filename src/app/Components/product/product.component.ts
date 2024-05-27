import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { PhonesDataService } from 'src/app/Services/phones-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private phoneData: PhonesDataService,private cartService:CartService) {}
  productData: any;

  ngOnInit() {
    this.phoneData.getPhoneData().subscribe(
      (response) => {
        this.productData = response;
        console.log(this.productData.product);
      },
      (error) => console.log(error)
    );
  }

  addToCart(item:any){
    this.cartService.addtoCart(item);
  }
}
