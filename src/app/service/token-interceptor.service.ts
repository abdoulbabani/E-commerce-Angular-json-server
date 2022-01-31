import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { user } from '../Modal';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  refrechtoken!: string;
  constructor(private uservice: UserService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('access_token') as string;

    if (token) {
      this.uservice.refrechtoken(token);
      // this.uservice.refrechtoken(token).subscribe((data) => {
      //  this.refrechtoken = data;
      // });
      //console.log(this.refrechtoken);
      //localStorage.setItem('access_token', this.refrechtoken);
      /*  const tokenHeader = req.clone({
        headers: req.headers.set(
          'Authorization',
          `bearer ${this.refrechtoken}`
        ),
      });*/
      // return next.handle(tokenHeader);
      return next.handle(req);
    } else {
      return next.handle(req);
    }
  }
}
