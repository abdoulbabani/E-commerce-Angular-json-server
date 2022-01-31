import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cart} from '../../Modal';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  cart!: Cart;
  url: string=" ";
  url1!:string;
  url2!:string;
  idProduct!: number;
  quantity!: number;
  //myThumbnail=" ";
 // myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";

  purchase = false;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private userservice: UserService,
    private router: Router
  ) {
    
    /*
    this._activatedRoute.params.subscribe((params) => {
      this.idProduct = this._activatedRoute.snapshot.params.id;
      this.productService
        .getProductById(this.idProduct)
        .subscribe((product) => {
          this.product = product;
        });
    });*/
  }

  ngOnInit(): void {
    // funtion permettant de recuperer un produit par son id depuis le fichier json server
    this.idProduct = this._activatedRoute.snapshot.params.id;
    this.productService.getProductById(this.idProduct).subscribe((product) => {
      this.cart = new Cart(
        product.id,
        product.name,
        product.price,
        1,
        product.pictureUrl,
        product.pictureUrl1,
        product.pictureUrl2,
        product.description
      );
      this.url=this.cart.pictureUrl
      this.url1=this.cart.pictureUrl1
      this.url2=this.cart.pictureUrl2

    });
    
     
  }
  // function permetant de recuperer le produit choisit pour achat direct et de l ajouter  dans un tableau subjet pour
  //la programmation reactive dans le service product service
  directPurchase(cart: Cart) {
    if (this.userservice.isAuth()) {
      this.productService.productSelected(cart);
      this.purchase = !this.purchase;
    } else {
      this.router.navigate(['login']);
    }
  }

  // function permettant d ajouter un cart dans un tableau qui se trouve dans carservice
  addToCart(cart: Cart) {
    if (this.userservice.isAuth()) {
      this.cartService.AddToCart(cart);
    } else {
      this.router.navigate(['login']);
    }
  }

  permut(){
   let urpermut=this.url;
    this.url=this.url1;
    this.url1=urpermut;
  }
  permut1(){
    let urpermut=this.url;
    this.url=this.url2;
    this.url2=urpermut;

  }
}
