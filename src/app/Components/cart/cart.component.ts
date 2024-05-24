import { Component, Input } from '@angular/core';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
@Input()product! :ProductList; 
quantity:number=1;
public increment():void{
  if(this.quantity<=10){
   this.quantity++;
  }else{
    alert("Sorry out of stock")
  }
}
public decrement():void{
  if(this.quantity>0){
   this.quantity--;
  }
}
}
