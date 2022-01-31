import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user, userDto } from '../Modal';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  getAllUsers(): Observable<user[]> {
    return this.http.get<user[]>('http://localhost:4000/users/getAllUsers');
  }

  addUser(user: any): Observable<user> {
    return this.http.post<user>('http://localhost:4000/users/register', user);
  }

  getOneUser(user: any): Observable<any> {
    return this.http.post<any>('http://localhost:4000/users/signin', user);
  }
  // fonction qui permet de se deconnecter
  signOut(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']).then(() => {
      location.reload();
    });
  }
  //refrech token
  refrechtoken(token: any) {
    const user: user = decode(token as string);
    return this.http
      .post<any>('http://localhost:4000/users/refrechtoken', user)
      .subscribe((data) => {
        localStorage.setItem('access_token', data);
      });
  }

  isAuth(): boolean {
    const token = localStorage.getItem('access_token');
    if (token) {
      return true;
    }
    return false;
  }
}
