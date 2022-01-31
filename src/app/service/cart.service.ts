import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product, ProductOrders, Cart, cartValid } from '../Modal';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  Card: any = [];
  validInCard: any = [];
  orders = new BehaviorSubject<any>([]);
  ordersAccept = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  addCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>('http://localhost:3000/Carts', cart);
  }
  /*  getAllCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>('http://localhost:3000/Carts');
  }*/
  //fucntion permettant de recuperer le produit par son id dans le fichier json
  getCartById(id: number): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:3000/Carts/${id}`);
  }
  //function  tout d abords transformer en observable
  //permettant d emettre la tableau de cart pour etre recuperer dans le composant shopping cart et afficher
  getProducts() {
    return this.orders.asObservable();
  }
 // function permettant de verifier si le cart envoyer existe, si c est le cas ignorer l ajout et dans le cas contraire
 // ajouter dans le tableau
  AddToCart(cart: Cart) {
    this.Card.map((a: any, index: any) => {
      if (a.id === cart.id) {
        this.Card.splice(index, 1);
      }
    });
    this.Card.push(cart);
    this.orders.next(this.Card);
  }
// function permetant de verifier le tableau et ensuite supprimer le cart par son id
  removeCart(id: number) {
    this.Card.map((a: any, index: any) => {
      if (a.id === id) {
        this.Card.splice(index, 1);
      }
    });
    this.orders.next(this.Card);
  }
// function permetant de recuperer le produit ajouter directment puis, l emettre pour besoin de paiement
  toPurchace(cart: cartValid) {
    this.validInCard = cart;
    this.ordersAccept.next(this.validInCard);
  }
// function transformer en observable , ensuite ou pourra recuperer le produite qu on veut acheter directement dans le composant 
//pour besoin de paiement
  getValidProducts() {
    return this.ordersAccept.asObservable();
  }
}
