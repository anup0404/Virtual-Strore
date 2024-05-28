import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { PhonesDataService } from 'src/app/Services/phones-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  private product_url: string = 'https://dummyjson.com/products/search?q=phone';
  searchList:string="";
  productData: any;
  constructor(
    private phoneData: PhonesDataService,
    private cartService: CartService,
    private router:Router
  ) {
  }


  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.searchList = params.get('searchList') || '';
    //   console.log("product :" ,this.searchList)
    // });
    
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation);
    if (navigation && navigation.extras.state) {
        this.searchList = navigation.extras.state.example;
      
  }
  

    this.phoneData.getData(this.product_url).subscribe((response) => {
      this.productData = response;
      console.log(this.productData.product);
    });
    
  }
 

  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }
}
