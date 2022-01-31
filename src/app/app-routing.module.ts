import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { SingleProductComponent } from './ecommerce/single-product/single-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryProductComponent } from './ecommerce/category-product/category-product.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCardComponent } from './ecommerce/shopping-card/shopping-card.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddCustumerComponent } from './admin/add-custumer/add-custumer.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddOrderComponent } from './admin/add-order/add-order.component';
import { HomeComponent } from './admin/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'category/:category', component: CategoryProductComponent },
  {
    path: 'shopping-card',
    component: ShoppingCardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: 'single-product/:id', component: SingleProductComponent },
  { path: 'Profil', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'AddProduct', // child route path
        component: AddProductComponent, // child route component that the router renders
      },
      {
        path: 'AddCustumer', // child route path
        component: AddCustumerComponent, // child route component that the router renders
      },
      {
        path: 'AddCategory', // child route path
        component: AddCategoryComponent, // child route component that the router renders
      },
      {
        path: 'AddOrder', // child route path
        component: AddOrderComponent, // child route component that the router renders
      },
      {
        path: 'home', // child route path
        component: HomeComponent, // child route component that the router renders
      },
      {
        path: 'customer', // child route path
        component: AddCustumerComponent, // child route component that the router renders
      },
      {
        path: '', // child route path
        component: HomeComponent, // child route component that the router renders
      },
      {
        path: '**',
        pathMatch: 'full', // child route path
        redirectTo: '/home', // child route component that the router renders
      },
    ],
  },

  { path: '', component: DashboardComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
