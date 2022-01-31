import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Modal';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user!: string;
  showHeader!: Boolean;
  category_name!: string;
  numberOrder!: number;
  cart!: Cart[];
  search!: string;
  constructor(
    private router: Router,
    private cartService: CartService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    // function permettant de recuperer le tableau behavor dans cart pour compter et incremeter le nombre de
    //produit selectionner dans le panier
    this.cartService.getProducts().subscribe((data: any) => {
      this.numberOrder = data.length;
    });
    this.user = localStorage.getItem('access_token') as string;
  }
  // function permettant de choisir les produits par categories
  changer() {
    console.log(this.category_name);
    if (this.category_name == 'All' || this.category_name == '') {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['/category', this.category_name]);
    }
  }
  signOut() {
    this.userservice.signOut();
  }

  recherche(search: any) {
    console.log(search);
  }
}
