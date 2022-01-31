import { Component, OnInit } from '@angular/core';
import { CartService } from './service/cart.service';
import { distinct } from 'rxjs/operators';
import { from } from 'rxjs';
import { Cart } from './Modal';
import { UserService } from './service/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Porjet-E-commerce';
  constructor(private userservice: UserService) {}
  ngOnInit(): void {
    /*  this.cartService.getAllCart().subscribe((data) => {
      let numberOrder = data.filter(function (ele, pos) {
        return data.indexOf(ele) == pos;
      });
      this.numberOrder = numberOrder.length;
    });*/

    // verification si le token a expire pour la deconexion automatique
    const token = localStorage.getItem('access_token');
    if (token) {
      if (helper.isTokenExpired(token as string)) {
        this.userservice.signOut();
      }
    }
  }

  goToHome() {
    window.location.reload();
  }
}
