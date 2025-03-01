import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'home', component: HomeComponent },
  { path: 'me', loadComponent: () => import('./pages/me/me.component').then(m => m.MeComponent) },
  { path: 'reviews', loadChildren: () => import('./features/reviews/reviews.module').then(m => m.ReviewsModule) },

  // Lazy Loading для фіч-модулів
  // { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },

  // { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
  // { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule) },
  // { path: 'checkout', loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule) },
  // { path: 'orders', loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule) },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
