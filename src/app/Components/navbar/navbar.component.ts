import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
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
  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getTotalItems(): number {
    return this.cartService.totalItems;
  }

  search(): void {
    this.router.navigate(['/product'], {
      queryParams: { search: this.searchList },
    });
  }
}
