import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthGuard } from './services/guards/auth.guard';
import { BookComponent } from './components/book/book.component';
import { ClientComponent } from './components/client/client.component';


const routes: Routes = [
  { path: 'book',component: BookComponent },
  { path: '',component: HomeComponent, data: {index: 0} },
  { path: 'cart',component:CartComponent ,canActivate: [AuthGuard], data: {index: 1}},
  { path: 'admin',component:GoodsComponent ,canActivate: [AuthGuard], data: {index: 2}},
  { path: 'login',component:LoginComponent , data: {index: 3} },
  { path: 'signup',component:SignupComponent , data: {index: 4}},
  { path: '##',component:NotFoundComponent,data: {index: 5}},
  { path: 'client',component:ClientComponent , data: {index: 6}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
