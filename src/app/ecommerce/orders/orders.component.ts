import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { Product, Cart, ProductOrders, cartValid } from '../../Modal';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  carts: Cart[] = [];
  nobasket!: Cart;
  city!: string;
  addresse!: string;
  newDate!: Date;
  payementMake = false;
  total: number = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}
  // un function pour recuperer la ville et l address  de livraison du client
  onSubmit(form: NgForm) {
    this.payementMake = !this.payementMake;
    console.log(form.value);
    this.city = form.value['city'];
    this.addresse = form.value['address'];
  }

  ngOnInit(): void {
    // les produits venant du shopping cart
    this.cartService.getValidProducts().subscribe((data: any) => {
      if (data) {
        this.carts = data.cart;
        this.total = data.price;
      }
    });
    // achat direct sans passer par la shopping cart
    this.productService.directPurchase.subscribe(() => {
      let cartSend = this.productService.getProductSelected();
      if (cartSend) {
        this.nobasket = cartSend;
        console.log('catd est ' + this.nobasket);
        this.total = this.totalPrice(this.nobasket);
      } else;
    });

    // recuperer la date actuelle
    this.newDate = new Date();
  }
  // fontion pour calculer uniquement le pirx total pour achat direct sans passer par la panier(shopping cart)
  private totalPrice(cart: Cart): number {
    let prixTotal: number = cart.price * cart.quantity;
    return prixTotal;
  }
  // focntion pour actualiser la page
  finich() {
    this.router.navigate(['dashboard']).then(() => {
      location.reload();
    });
  }
}
