import { Routes } from '@angular/router';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { Component } from '@angular/core';
import { title } from 'process';

import { BlankLayout } from './layout/blank-layout/blank-layout';
import path from 'path';
import { Home } from './pages/home/home';
import { Cart } from './pages/cart/cart';
import { ProductsPage } from './pages/products/products';
import { Brands } from './pages/brands/brands';
import { Categories } from './pages/categories/categories';
import { Details } from './pages/details/details';
import { Checkout } from './pages/checkout/checkout';
import { NotFound } from './pages/not-found/not-found';
import { Register } from './core/auth/register/register';
import { Login } from './core/auth/login/login';
import { authGuardGuard } from './core/guards/auth-guard-guard';
import { isLoggedInGuard } from './core/guards/is-logged-in-guard';
import { Allorders } from './pages/allorders/allorders';
import { ForgetPassword } from './core/auth/forget-password/forget-password';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayout,
    canActivate: [isLoggedInGuard],
    children: [
      { path: 'login', component: Login, title: 'Login' },
      { path: 'register', component: Register, title: 'Register' },
      {
        path: 'forgetPassword',
        component: ForgetPassword,
        title: 'Forget Password',
      },
    ],
  },
  {
    path: '',
    component: BlankLayout,
    canActivate: [authGuardGuard],
    children: [
      { path: 'home', component: Home, title: 'Home' },
      { path: 'cart', component: Cart, title: 'Cart' },
      { path: 'products', component: ProductsPage, title: 'Products' },
      { path: 'brands', component: Brands, title: 'Brands' },
      { path: 'categories', component: Categories, title: 'Categories' },
      { path: 'allorders', component: Allorders, title: 'Order confirmation' },
      { path: 'details/:id', component: Details, title: 'Details' },
      { path: 'checkout/:id', component: Checkout, title: 'Checkout' },
    ],
  },
  { path: '**', component: NotFound, title: 'Not Found' },
];
