import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CartComponent } from './Components/cart/cart.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductComponent,
    ProductDetailsComponent,
    NavbarComponent,
    CartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
