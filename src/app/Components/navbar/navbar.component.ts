import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public searchList: string = '';
  logo: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0C8x7qlSIc5fj8z60gSScsMPolwC2Ws2vw&s';
  // public showSearchBox: boolean = false;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  getTotalItems(): number {
    return this.cartService.totalItems;
  }

  search(): void {
    const currentUrl = this.router.url;
    if (currentUrl.includes('/product')) {
      this.router.navigate(['/product'], {
        queryParams: { search: this.searchList },
      });
    }
  }
}
