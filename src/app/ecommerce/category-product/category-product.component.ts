import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Cart, Product } from '../../Modal';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss'],
})
export class CategoryProductComponent implements OnInit {
  products!: Product[];
  category!: string;

  constructor(
    private router: Router,
    private _activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private userservice: UserService
  ) {}

  ngOnInit(): void {
    // function me permettant de recuperer les produits par categorie
    this._activatedRoute.params.subscribe((params) => {
      this.category = this._activatedRoute.snapshot.params.category;
      this.productService
        .getProductByCategory(this.category)
        .subscribe((products) => {
          this.products = products;
        });
    });
  }
  // function permattant de faire une direction vers single page
  SingleProduct(id: number) {
    this.router.navigate(['/single-product', id]);
  }
  // function permettant de creer un panier  et d ajouter dans un  tableau subjectbehavors qui se trouve dans le service
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
          product.pictureUrl2,
          product.description
        )
      );
    }
    this.router.navigate(['login']);
  }
}
