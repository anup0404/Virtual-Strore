import { Component, Input } from '@angular/core';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() productlist!:ProductList[];
  cartShow:boolean=false
  product:any
logo:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0C8x7qlSIc5fj8z60gSScsMPolwC2Ws2vw&s";

public cartDetails(cartProduct:ProductList[]):void{
  this.cartShow=!this.cartShow;
  this.product=cartProduct;
}
}




