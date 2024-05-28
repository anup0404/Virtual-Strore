import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public searchList:string="";
  logo: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0C8x7qlSIc5fj8z60gSScsMPolwC2Ws2vw&s';

  constructor(private cartServices: CartService) {}

  ngOnInit(): void {
   
  }
  gettotalItems() :number{
  return this.cartServices.totalItems;
 }
 search(event:any){
 this.searchList=event.target.value;
 console.log(this.searchList)
 }

}
