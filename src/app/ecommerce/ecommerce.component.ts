import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';
import { Product, Cart } from '../Modal';
import { CartService } from '../service/cart.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent implements OnInit {
  products!: Product[];

  productSelected!: boolean;
  constructor(
    private router: Router,
    private productservice: ProductService,
    private cartService: CartService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    // function permettant de recuperer tousles produits  pour afficher dans la page d accueil
    this.productservice.getAllProduct().subscribe((data) => {
      this.products = data;
    });
  }
  // function de redirection vers un single-page lorsqu on desire voirs plus de details sur le produit cliker
  SingleProduct(id: number) {
    this.router.navigate(['/single-product', id]);
  }
  /*
  addToCart(product: Product) {
    (this.cart = new Cart(product.name, product.price, 1, product.pictureUrl)),
      this.cartService.addCart(this.cart ).subscribe((data) => {
        console.log(data);
      });
    this.productSelected = !this.productSelected;
  }
  RemoveCart(id: number) {
    this.productSelected = !this.productSelected;
  }*/
  // function permettant de  creer un panier et ajouter dans un tableau qui se trouve dans carservice
  addToCart(product: Product) {
    if (this.userservice.isAuth()) {
      this.cartService.AddToCart(
        new Cart(
          product.id,
          product.name,
          product.price,
          1,
          product.pictureUrl,
          product.pictureUrl1,
          product.pictureUrl,
          product.description
        )
      );
    } else {
      this.router.navigate(['login']);
    }
  }
}
