import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product, Cart } from '../Modal';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private product!: Product;
  private productOrder!: Cart;
  private DirectPurchase = new Subject<Cart>();
  private ViewProduct = new Subject<Product>();
  viewProduct = this.ViewProduct.asObservable();
  directPurchase = this.DirectPurchase.asObservable();

  constructor(private http: HttpClient) {}
// function permettant de recuperer tous les produits depuis le fichier json
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/posts');
  }
// function permetant de recupere un produit par son id dans le fichier json
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/posts/${id}`);
  }
//function permettant de recuperer le produit par categorie
  getProductByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `http://localhost:3000/posts?category=${category}`
    );
  }
// function permettant de  recuperer le produit choisit  directement et emettre le vide avec la methode next du subject
//pour signater la presence d un produit 
  productSelected(productOrde: Cart) {
    this.productOrder = productOrde;
    this.DirectPurchase.next();
  }
// function permettant de returner le produit ajouter
  getProductSelected() {
    return this.productOrder;
  }
}
