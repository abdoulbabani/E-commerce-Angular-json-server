import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { SingleProductComponent } from './ecommerce/single-product/single-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryProductComponent } from './ecommerce/category-product/category-product.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCardComponent } from './ecommerce/shopping-card/shopping-card.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddCustumerComponent } from './admin/add-custumer/add-custumer.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddOrderComponent } from './admin/add-order/add-order.component';
import { HomeComponent } from './admin/home/home.component';
//providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { FooterComponent } from './footer/footer.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';



@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductsComponent,
    SingleProductComponent,
    DashboardComponent,
    CategoryProductComponent,
    LoginComponent,
    ShoppingCardComponent,
    OrdersComponent,
    ProfileComponent,
    HeaderComponent,
    AdminComponent,
    AddProductComponent,
    AddCustumerComponent,
    AddCategoryComponent,
    AddOrderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxImageZoomModule 
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
