import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },

  {
    path: 'product',
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
        path: 'productDetails',
        component: ProductDetailsComponent,
      },
    ],
  },

  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
