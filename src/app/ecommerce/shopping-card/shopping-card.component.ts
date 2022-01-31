import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Cart, ProductOrders, cartValid } from '../../Modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent implements OnInit {
  carts!: Cart[];
  subTotal!: number;
  productOrder!: ProductOrders[];
  quantite!: number;
  Shipping: number = 6.9;
  Total!: number;
  baba!: string;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    /*   this.cartService.getAllCart().subscribe((data) => {
      this.carts = data;
    });*/

    this.cartService.getProducts().subscribe((data: any) => {
      if (data) {
        this.carts = data;
      }
    });
    this.subTotal = this.calculateTotal(this.carts);
    this.Total = this.subTotal + this.Shipping;
  }

  private calculateTotal(products: Cart[]): number {
    let sum = 0;
    products.forEach((value) => {
      sum += value.price * value.quantity;
    });
    return sum;
  }

  removeCart(id: number) {
    this.cartService.removeCart(id);
    this.subTotal = this.calculateTotal(this.carts);
  }
  changer() {
    this.subTotal = this.calculateTotal(this.carts);
    this.Total = this.subTotal + this.Shipping;
  }
  chectOut(cart: Cart[]) {
    this.cartService.toPurchace(new cartValid(cart, this.Total));
    console.log('cartexict' + cart);

    this.router.navigate(['/orders']);
  }
}
