Структура проекту на ангуляр 19 в feature-sliced дизайні

shop-ang-19/
│── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── components/
│   │   │   │   ├── language-switcher/
│   │   │   │   │   ├── language-switcher.component.ts
│   │   │   │   │   ├── language-switcher.component.html
│   │   │   │   │   ├── language-switcher.component.scss
│   │   │   ├── interceptors/
│   │   │   │   ├── security.interceptor.ts
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── sanitize.service.ts
│   │   │   │   ├── language.service.ts   # 🔹 Сервіс для зміни мови (оновлений)
│   │   ├── pages/                      # 🔹 Головні сторінки
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   ├── me/
│   │   │   │   ├── me.component.ts
│   │   │   │   ├── me.component.html
│   │   │   │   ├── me.component.scss
│   │   ├── features/                   # 🔹 Lazy Loaded Standalone-компоненти
│   │   │   ├── auth/
│   │   │   │   ├── auth.component.ts
│   │   │   │   ├── auth.component.html
│   │   │   │   ├── auth.component.scss
│   │   │   ├── cart/
│   │   │   │   ├── cart.component.ts
│   │   │   │   ├── cart.component.html
│   │   │   │   ├── cart.component.scss
│   │   │   ├── catalog/
│   │   │   │   ├── catalog.component.ts
│   │   │   │   ├── catalog.component.html
│   │   │   │   ├── catalog.component.scss
│   │   │   ├── checkout/
│   │   │   │   ├── checkout.component.ts
│   │   │   │   ├── checkout.component.html
│   │   │   │   ├── checkout.component.scss
│   │   │   ├── orders/
│   │   │   │   ├── orders.component.ts
│   │   │   │   ├── orders.component.html
│   │   │   │   ├── orders.component.scss
│   │   │   ├── reviews/
│   │   │   │   ├── reviews.component.ts
│   │   │   │   ├── reviews.component.html
│   │   │   │   ├── reviews.component.scss
│   │   ├── app.component.ts       # 🔹 Точка входу Standalone
│   │   ├── app.routes.ts
│   │   ├── app.config.ts
│   ├── assets/                         # 🔹 Статичні ресурси (🔴 важливо!)
│   │   ├── i18n/                        # 🔹 Переклади
│   │   │   ├── en.json
│   │   │   ├── uk.json
│   │   ├── images/                      # 🔹 Картинки, іконки
│   │   │   ├── logo.png
│   ├── environments/                    # 🔹 Firebase та змінні оточення
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   ├── main.ts                          # 🔹 Точка входу Standalone
│   ├── index.html
│   ├── styles.scss
│── angular.json
│── package.json
│── tsconfig.json


певний вміст компонентів може бути застарілим


Структура проекту на ангуляр 19 в feature-sliced дизайні

shop-ang-19/
│── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── components/
│   │   │   │   ├── language-switcher/
│   │   │   │   │   ├── language-switcher.component.ts
│   │   │   │   │   ├── language-switcher.component.html
│   │   │   │   │   ├── language-switcher.component.scss
│   │   │   ├── interceptors/
│   │   │   │   ├── security.interceptor.ts
│   │   │   ├── services/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── sanitize.service.ts
│   │   │   │   ├── language.service.ts   # 🔹 Сервіс для зміни мови (оновлений)
│   │   ├── pages/                      # 🔹 Головні сторінки
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   ├── me/
│   │   │   │   ├── me.component.ts
│   │   │   │   ├── me.component.html
│   │   │   │   ├── me.component.scss
│   │   ├── features/                   # 🔹 Lazy Loaded Standalone-компоненти
│   │   │   ├── auth/
│   │   │   │   ├── auth.component.ts
│   │   │   │   ├── auth.component.html
│   │   │   │   ├── auth.component.scss
│   │   │   ├── cart/
│   │   │   │   ├── cart.component.ts
│   │   │   │   ├── cart.component.html
│   │   │   │   ├── cart.component.scss
│   │   │   ├── catalog/
│   │   │   │   ├── catalog.component.ts
│   │   │   │   ├── catalog.component.html
│   │   │   │   ├── catalog.component.scss
│   │   │   ├── checkout/
│   │   │   │   ├── checkout.component.ts
│   │   │   │   ├── checkout.component.html
│   │   │   │   ├── checkout.component.scss
│   │   │   ├── orders/
│   │   │   │   ├── orders.component.ts
│   │   │   │   ├── orders.component.html
│   │   │   │   ├── orders.component.scss
│   │   │   ├── reviews/
│   │   │   │   ├── reviews.component.ts
│   │   │   │   ├── reviews.component.html
│   │   │   │   ├── reviews.component.scss
│   │   ├── app.component.ts       # 🔹 Точка входу Standalone
│   │   ├── app.routes.ts
│   │   ├── app.config.ts
│   ├── assets/                         # 🔹 Статичні ресурси (🔴 важливо!)
│   │   ├── i18n/                        # 🔹 Переклади
│   │   │   ├── en.json
│   │   │   ├── uk.json
│   │   ├── images/                      # 🔹 Картинки, іконки
│   │   │   ├── logo.png
│   ├── environments/                    # 🔹 Firebase та змінні оточення
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   ├── main.ts                          # 🔹 Точка входу Standalone
│   ├── index.html
│   ├── styles.scss
│── angular.json
│── package.json
│── tsconfig.json



C:\Users\4sv\Desktop\shop-ang-19\angular.json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "shop-ang-19": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/shop-ang-19",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js",
              "@angular/localize/init"
            ],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": [],
            "server": "src/main.server.ts",
            "prerender": true,
            "ssr": {
              "entry": "src/server.ts"
            }
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all",
              "serviceWorker": "ngsw-config.json"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "shop-ang-19:build:production"
            },
            "development": {
              "buildTarget": "shop-ang-19:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing",
              "@angular/localize/init"
            ],
            "tsConfig": "tsconfig.spec.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": [
              "src/styles.scss"
            ],
            "scripts": []
          }
        }
      }
    }
  }
}



C:\Users\4sv\Desktop\shop-ang-19\package.json
{
  "name": "shop-ang-19",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "serve:ssr:shop-ang-19": "node dist/shop-ang-19/server/server.mjs"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^19.1.0",
    "@angular/common": "^19.1.0",
    "@angular/compiler": "^19.1.0",
    "@angular/core": "^19.1.0",
    "@angular/fire": "^19.0.0",
    "@angular/forms": "^19.1.0",
    "@angular/platform-browser": "^19.1.0",
    "@angular/platform-browser-dynamic": "^19.1.0",
    "@angular/platform-server": "^19.1.0",
    "@angular/router": "^19.1.0",
    "@angular/service-worker": "^19.1.0",
    "@angular/ssr": "^19.1.5",
    "express": "^4.18.2",
    "firebase": "^11.2.0",
    "rxjs": "~7.8.0",
    "stripe": "^17.6.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.1.5",
    "@angular/cli": "^19.1.5",
    "@angular/compiler-cli": "^19.1.0",
    "@angular/localize": "^19.1.4",
    "@types/express": "^4.17.17",
    "@types/jasmine": "~5.1.0",
    "@types/node": "^18.18.0",
    "jasmine-core": "~5.5.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.7.2"
  }
}


C:\Users\4sv\Desktop\shop-ang-19\ngsw-config.json
{
  "$schema": "./node_modules/@angular/service-worker/config/schema.json",
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.csr.html",
          "/index.html",
          "/manifest.webmanifest",
          "/*.css",
          "/*.js"
        ]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/**/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)"
        ]
      }
    }
  ]
}



C:\Users\4sv\Desktop\shop-ang-19\src\index.html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ShopAng19</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="manifest" href="manifest.webmanifest">
  <meta name="theme-color" content="#1976d2">
</head>
<body>
  <app-root></app-root>
  <noscript>Please enable JavaScript to continue using this application.</noscript>
</body>
</html>


C:\Users\4sv\Desktop\shop-ang-19\src\main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;



C:\Users\4sv\Desktop\shop-ang-19\src\main.ts
/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


C:\Users\4sv\Desktop\shop-ang-19\src\manifest.json
{
  "name": "Cube Art",
  "short_name": "CubeArt",
  "description": "E-commerce for artworks",
  "start_url": ".",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}



C:\Users\4sv\Desktop\shop-ang-19\src\server.ts
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html'
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}



C:\Users\4sv\Desktop\shop-ang-19\src\environments\environment.ts
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyASQ8jHDiFqvn4qalnj7rsl0WgbeyQRUds',
    authDomain: 'cubeart-f77cf.firebaseapp.com',
    projectId: 'cubeart-f77cf',
    storageBucket: 'cubeart-f77cf.firebasestorage.app',
    messagingSenderId: '121577235222',
    appId: '1:121577235222:web:8abbe79856b09621042637',
    measurementId: 'G-9V31W5THL1',
  },
  telegramBotToken: 'your-telegram-bot-token',
  telegramChatId: 'your-telegram-chat-id',
};




C:\Users\4sv\Desktop\shop-ang-19\src\environments\environment.prod.ts
...



src\app\app.component.html
<app-user-menu />

<router-outlet />



C:\Users\4sv\Desktop\shop-ang-19\src\app\app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserMenuComponent } from './shared/components/user-menu/user-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shop-ang-19';
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\app.config.server.ts
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);



C:\Users\4sv\Desktop\shop-ang-19\src\app\app.config.ts
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideServiceWorker } from '@angular/service-worker';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
};



C:\Users\4sv\Desktop\shop-ang-19\src\app\app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'me', loadComponent: () => import('./pages/me/me.component').then(m => m.MeComponent) },

  // Lazy Loading для фіч-модулів
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'checkout', loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'orders', loadChildren: () => import('./features/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'reviews', loadChildren: () => import('./features/reviews/reviews.module').then(m => m.ReviewsModule) },

  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


C:\Users\4sv\Desktop\shop-ang-19\src\app\assets


C:\Users\4sv\Desktop\shop-ang-19\src\app\core\firebase\firebase.module.ts
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ]
})
export class FirebaseModule { }



src\app\entities\cart\cart.model.ts
import { IProduct } from '../product/product.model';

export interface ICartItem extends IProduct {
  quantity: number;
}



src\app\entities\order\order.model.ts
import { IProduct } from "../product/product.model";

export interface IOrder {
  id: string;
  userId: string;
  products: IProduct[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
  createdAt: string;
}



src\app\entities\order\order.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, query, where, getDocs } from '@angular/fire/firestore';
import { IOrder } from '../../entities/order/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private collectionName = 'orders';

  constructor(private firestore: Firestore) {}

  // Створення нового замовлення
  createOrder(order: Omit<IOrder, 'id'>): Promise<string> {
    const ordersRef = collection(this.firestore, this.collectionName);
    return addDoc(ordersRef, order).then((docRef) => docRef.id);
  }

  // Отримання усіх замовлень користувача
  getOrders(userId: string): Observable<IOrder[]> {
    const ordersRef = collection(this.firestore, this.collectionName);
    const q = query(ordersRef, where('userId', '==', userId));

    return collectionData(q, { idField: 'id' }) as Observable<IOrder[]>;
  }

  // Отримання замовлення за його ID
  getOrderById(orderId: string): Observable<IOrder | undefined> {
    const orderDocRef = doc(this.firestore, `${this.collectionName}/${orderId}`);
    return docData(orderDocRef, { idField: 'id' }) as Observable<IOrder | undefined>;
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\entities\product\product.model.ts
export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  rating: number;
  stock: number;
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\entities\product\product.service.ts
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../../entities/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private collectionName = 'products';

  constructor(private firestore: Firestore) {}

  // Отримати всі товари
  getProducts(): Observable<IProduct[]> {
    const productsRef = collection(this.firestore, this.collectionName);
    return collectionData(productsRef, { idField: 'id' }) as Observable<IProduct[]>;
  }

  // Отримати товар за ID
  getProductById(id: string): Observable<IProduct | undefined> {
    const productDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
    return docData(productDocRef, { idField: 'id' }) as Observable<IProduct | undefined>;
  }

  // Додати новий товар
  async addProduct(product: Omit<IProduct, 'id'>): Promise<void> {
    const productsRef = collection(this.firestore, this.collectionName);
    await addDoc(productsRef, product);
  }

  // Оновити існуючий товар
  async updateProduct(id: string, product: Partial<IProduct>): Promise<void> {
    const productDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
    await updateDoc(productDocRef, product);
  }

  // Видалити товар
  async deleteProduct(id: string): Promise<void> {
    const productDocRef = doc(this.firestore, `${this.collectionName}/${id}`);
    await deleteDoc(productDocRef);
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\entities\review\review.model.ts
export class ReviewModel {
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\entities\review\review.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\entities\shipping\shipping.model.ts
export interface IShippingAddress {
  id?: string; // id може бути, але не обов'язково
  fullName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}



src\app\entities\shipping\shipping.service.ts
import { Injectable } from '@angular/core';
import { Firestore, doc, docData, setDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IShippingAddress } from './shipping.model';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  private collectionName = 'shipping_addresses';

  constructor(private firestore: Firestore) {}

  // Збереження або оновлення адреси доставки
  saveShippingAddress(userId: string, shippingData: IShippingAddress): Promise<void> {
    const shippingDocRef = doc(this.firestore, `${this.collectionName}/${userId}`);
    return setDoc(shippingDocRef, shippingData, { merge: true });
  }

  // Отримання адреси доставки
  getShippingAddress(userId: string): Observable<IShippingAddress | undefined> {
    const shippingDocRef = doc(this.firestore, `${this.collectionName}/${userId}`);
    return docData(shippingDocRef, { idField: 'id' }) as Observable<IShippingAddress | undefined>;
  }

  // Видалення адреси доставки
  deleteShippingAddress(userId: string): Promise<void> {
    const shippingDocRef = doc(this.firestore, `${this.collectionName}/${userId}`);
    return deleteDoc(shippingDocRef);
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\entities\user\user.model.ts
import { IShippingAddress } from "../shipping/shipping.model";

export interface IUser {
  id: string;
  email: string;
  name: string;
  phone?: string; // Номер телефону для зв'язку
  address?: IShippingAddress; // Адреса доставки
  createdAt: string;
  updatedAt: string;
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\entities\user\user.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

}

// todo is it works?




C:\Users\4sv\Desktop\shop-ang-19\src\app\features\auth\auth-routing.module.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\auth\login\login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
    imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => this.errorMessage = 'Невірний логін або пароль'
    });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => this.errorMessage = 'Помилка при вході через Google'
    });
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\auth\register\register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  username: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Паролі не співпадають';
      return;
    }

    this.authService.register(this.email, this.username, this.password).subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => this.errorMessage = 'Помилка при реєстрації'
    });
  }

  registerWithGoogle() {
    this.authService.loginWithGoogle().subscribe({
      next: () => this.router.navigate(['/home']),
      error: () => this.errorMessage = 'Помилка при реєстрації через Google'
    });
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\cart\cart-routing.module.ts
import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const cartRoutes: Routes = [
  { path: '', component: CartComponent }
];



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\cart\cart\cart.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../shared/services/cart.service';
import { ICartItem } from '../../../entities/cart/cart.model';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from '../cart-item/cart-item.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [CommonModule, CartItemComponent, RouterLink],
})
export class CartComponent implements OnInit {
  cartItems: ICartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  removeItem(productId: string): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\cart\cart-item\cart-item.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from '../../../entities/cart/cart.model';
import { CurrencyPipe } from '../../../shared/pipes/currency.pipe';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  imports: [CurrencyPipe]
})
export class CartItemComponent {
  @Input() item!: ICartItem;
  @Output() remove = new EventEmitter<void>();

  removeItem() {
    this.remove.emit();
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\catalog\catalog-routing.module.ts
import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';

export const catalogRoutes: Routes = [
  { path: '', component: CatalogComponent }
];



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\catalog\catalog\catalog.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../../entities/product/product.model';
import { ProductService } from '../../../entities/product/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  imports: [CommonModule, FormsModule, ProductCardComponent, RouterLink],
})
export class CatalogComponent implements OnInit {
  products: IProduct[] = [];
  isLoading = true;
  errorMessage = '';

  newProduct: Omit<IProduct, 'id' | 'rating'> = {
    name: '',
    description: '',
    category: '',
    price: 0,
    imageUrl: '',
    stock: 0,
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Помилка завантаження продуктів';
        this.isLoading = false;
        console.error(error);
      },
    });
  }

  async addProduct() {
    if (!this.newProduct.name || !this.newProduct.price || !this.newProduct.imageUrl || !this.newProduct.category) {
      this.errorMessage = 'Будь ласка, заповніть всі обов’язкові поля!';
      return;
    }

    try {
      await this.productService.addProduct({ ...this.newProduct, rating: 0 }); // Нові продукти мають рейтинг 0
      this.newProduct = { name: '', description: '', category: '', price: 0, imageUrl: '', stock: 0 }; // Очистка форми
      this.loadProducts(); // Перезавантаження каталогу
    } catch (error) {
      this.errorMessage = 'Не вдалося додати продукт';
      console.error(error);
    }
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\catalog\product-card\product-card.component.ts
import { Component, Input } from '@angular/core';
import { IProduct } from '../../../entities/product/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ICartItem } from '../../../entities/cart/cart.model';  // імпортуємо ICartItem
import { CurrencyPipe } from '../../../shared/pipes/currency.pipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CurrencyPipe],
})
export class ProductCardComponent {
  @Input() product!: IProduct; // Приймаємо продукт через Input

  constructor(private cartService: CartService) {}

  // Функція додавання продукту в кошик
  addToCart(): void {
    const cartItem: ICartItem = {
      ...this.product,  // Копіюємо всі властивості продукту
      quantity: 1,      // Додаємо кількість
    };
    this.cartService.addToCart(cartItem); // Викликаємо метод з CartService для додавання в кошик
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\checkout\checkout-routing.module.ts
import { Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

export const checkoutRoutes: Routes = [
  { path: '', component: CheckoutComponent }
];



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\checkout\checkout\checkout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../../../shared/pipes/currency.pipe';
import { CartService } from '../../../shared/services/cart.service';
import { ICartItem } from '../../../entities/cart/cart.model';
import { PaymentService } from '../../../shared/services/payment.service';
import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { ShippingFormComponent } from '../shipping-form/shipping-form.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    PaymentFormComponent,
    ShippingFormComponent,
  ],
})
export class CheckoutComponent {
  cartItems: ICartItem[] = [];
  totalPrice: number = 0;
  selectedPaymentMethod: 'stripe' | 'gopay' | 'bank' = 'stripe';

  constructor(
    private cartService: CartService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  onCheckout() {
    const paymentData = {
      amount: this.totalPrice,
      currency: 'CZK',
      email: 'customer@example.com',
    };

    let paymentRequest;
    if (this.selectedPaymentMethod === 'stripe') {
      paymentRequest = this.paymentService.createStripePayment(paymentData);
    } else if (this.selectedPaymentMethod === 'gopay') {
      paymentRequest = this.paymentService.createGoPayPayment(paymentData);
    } else {
      const response = this.paymentService.processBankTransfer(paymentData);
      console.log('Оплата через банк:', response.paymentUrl);
      return;
    }

    paymentRequest.subscribe({
      next: (response) => {
        if (response.success && response.paymentUrl) {
          window.location.href = response.paymentUrl;
        } else {
          console.error('Payment error:', response.error);
          alert(`Payment failed: ${response.error}`);
        }
      },
      error: (err) => {
        console.error('Payment request failed:', err);
        alert('There was an error processing your payment.');
      }
    });
  }

}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\checkout\payment-form\payment-form.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
  imports: [FormsModule],
})
export class PaymentFormComponent {
  paymentDetails: any = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };

  onSubmit() {
    // Логіка для обробки оплати
    console.log('Дані для оплати:', this.paymentDetails);
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\checkout\shipping-form\shipping-form.component.ts
import { Component, computed, effect, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { ShippingService } from '../../../entities/shipping/shipping.service';
import { IShippingAddress } from '../../../entities/shipping/shipping.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrl: './shipping-form.component.scss',
  imports: [CommonModule, ReactiveFormsModule],
})
export class ShippingFormComponent {
  shippingForm: FormGroup;
  userId = computed(() => this.authService.currentUserSig()?.id ?? null); // Отримуємо userId із сигналу

  constructor(
    private fb: FormBuilder,
    private shippingService: ShippingService,
    private authService: AuthService
  ) {
    this.shippingForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9,15}$')]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{3} ?[0-9]{2}$')]], // Чехія: 123 45 або 12345
      country: [{ value: 'Czech Republic', disabled: true }, Validators.required]
    });

    // Виконуємо ефект, щоб автоматично завантажувати адресу при зміні користувача
    effect(() => {
      const id = this.userId();
      if (id) {
        this.loadShippingAddress(id);
      }
    });
  }

  // Завантаження збереженої адреси доставки
  loadShippingAddress(userId: string) {
    this.shippingService.getShippingAddress(userId).subscribe(address => {
      if (address) {
        this.shippingForm.patchValue(address);
      }
    });
  }

  // Збереження адреси доставки
  saveShippingAddress() {
    const userId = this.userId();
    if (this.shippingForm.invalid || !userId) return;

    const shippingData: IShippingAddress = this.shippingForm.getRawValue();
    this.shippingService.saveShippingAddress(userId, shippingData).then(() => {
      alert('Shipping address saved successfully!');
    });
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\orders\orders-routing.module.ts
import { Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersComponent } from './orders/orders.component';

export const ordersRoutes: Routes = [
  { path: '', component: OrdersComponent },
  { path: ':id', component: OrderDetailsComponent }
];



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\orders\order-details\order-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from '../../../entities/order/order.model';
import { OrderService } from '../../../entities/order/order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  imports: [CommonModule],
})
export class OrderDetailsComponent implements OnInit {
  order: IOrder | undefined;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.orderService.getOrderById(orderId).subscribe((order) => {
        this.order = order;
      });
    }
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\orders\orders\orders.component.ts
import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../../entities/order/order.model';
import { OrderService } from '../../../entities/order/order.service';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  imports: [CommonModule, DatePipe],
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  userId: string = 'sampleUserId';  // Заміни на реальний ID користувача

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    // Отримуємо замовлення для конкретного користувача
    this.orderService.getOrders(this.userId).subscribe((orders) => {
      this.orders = orders;
    });
  }

  viewOrderDetails(orderId: string): void {
    // Перехід до сторінки деталей замовлення
    this.router.navigate(['/orders', orderId]);
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\reviews\reviews-routing.module.ts
import { Routes } from '@angular/router';

export const reviewsRoutes: Routes = [];




C:\Users\4sv\Desktop\shop-ang-19\src\app\features\reviews\reviews\reviews.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

}



C:\Users\4sv\Desktop\shop-ang-19\src\app\features\reviews\review-form\review-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-review-form',
  imports: [],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.scss'
})
export class ReviewFormComponent {

}



C:\Users\4sv\Desktop\shop-ang-19\src\app\i18n\en.json
...
C:\Users\4sv\Desktop\shop-ang-19\src\app\i18n\uk.json
...


C:\Users\4sv\Desktop\shop-ang-19\src\app\pages\checkout-page\checkout-page.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-page',
  imports: [],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.scss'
})
export class CheckoutPageComponent {

}



C:\Users\4sv\Desktop\shop-ang-19\src\app\pages\home\home.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}



src\app\pages\me\me.component.ts
import { Component } from '@angular/core';
import { IUser } from '../../entities/user/user.model';
import { IOrder } from '../../entities/order/order.model';
import { AuthService } from '../../shared/services/auth.service';
import { OrderService } from '../../entities/order/order.service';
import { CommonModule } from '@angular/common';
import { effect } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
  imports: [CommonModule],
})
export class MeComponent {
  user: IUser | null = null;
  orders: IOrder[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
    effect(() => {
      this.user = this.authService.currentUserSig(); // Отримуємо поточного користувача безпосередньо з сигналу

      if (this.user) {
        this.loadOrders(this.user.id);
        this.isLoading = false;
      } else {
        this.errorMessage = 'Користувач не знайдений!';
        this.isLoading = false;
      }
    });
  }

  loadOrders(userId: string): void {
    this.orderService.getOrders(userId).subscribe({
      next: (orders) => {
        this.orders = orders;
      },
      error: (error) => {
        this.errorMessage = 'Помилка при завантаженні замовлень';
        console.error(error);
      },
    });
  }
}



src\app\pages\product-details\product-details.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

}



src\app\pwa


src\app\shared\components\user-menu\user-menu.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  constructor(public authService: AuthService) {}
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\shared\directives\lazy-img.directive.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyImg]'
})
export class LazyImgDirective implements OnInit {
  @Input() appLazyImg: string = '';

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const imgElement = this.el.nativeElement;
    if ('loading' in HTMLImageElement.prototype) {
      imgElement.src = this.appLazyImg;
      imgElement.loading = 'lazy';
    } else {
      this.loadImageWithIntersectionObserver(imgElement);
    }
  }

  private loadImageWithIntersectionObserver(imgElement: HTMLImageElement): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imgElement.src = this.appLazyImg;
          observer.unobserve(imgElement);
        }
      });
    });
    observer.observe(imgElement);
  }
}


src\app\shared\guards\auth.guard.ts
import { Injectable, computed } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = computed(() => !!this.authService.currentUserSig());

    if (!isAuthenticated()) {
      this.router.navigate(['auth/login']);
      return false;
    }
    return true;
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\shared\pipes\currency.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currency: string = 'CZK'): string {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(value);
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\shared\services\auth.service.ts
import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
  GoogleAuthProvider,
  signInWithPopup,
  User as FirebaseUser,
} from '@angular/fire/auth';
import { from, map, Observable } from 'rxjs';
import { IUser } from '../../entities/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  currentUserSig = signal<IUser | null>(null); // Сигнал для збереження поточного користувача

  constructor() {
    user(this.auth)
      .pipe(
        map((firebaseUser) =>
          firebaseUser ? this.mapUser(firebaseUser) : null
        )
      )
      .subscribe((user) => this.currentUserSig.set(user)); // Оновлення сигналу при зміні користувача
  }

  register(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => updateProfile(res.user, { displayName: username }))
      .then(() => this.updateCurrentUser());

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.auth, email, password)
      .then(() => this.updateCurrentUser());

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.auth).then(() => this.currentUserSig.set(null));
    return from(promise);
  }

  loginWithGoogle(): Observable<void> {
    const provider = new GoogleAuthProvider();
    const promise = signInWithPopup(this.auth, provider)
      .then(() => this.updateCurrentUser());

    return from(promise);
  }

  registerWithGoogle(): Observable<void> {
    const provider = new GoogleAuthProvider();
    const promise = signInWithPopup(this.auth, provider)
      .then((res) => {
        const user = res.user;
        if (user) {
          return updateProfile(user, { displayName: user.displayName });
        }
        return Promise.resolve();
      })
      .then(() => this.updateCurrentUser());

    return from(promise);
  }

  private updateCurrentUser(): void {
    const firebaseUser = this.auth.currentUser;
    this.currentUserSig.set(firebaseUser ? this.mapUser(firebaseUser) : null);
  }

  private mapUser(firebaseUser: FirebaseUser): IUser {
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email ?? '',
      name: firebaseUser.displayName ?? '',
      createdAt: firebaseUser.metadata.creationTime ?? '',
      updatedAt: firebaseUser.metadata.lastSignInTime ?? '',
    };
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\shared\services\cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartItem } from '../../entities/cart/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: ICartItem[] = [];
  private cartSubject = new BehaviorSubject<ICartItem[]>([]);

  constructor() {}

  getCart(): Observable<ICartItem[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: ICartItem): void {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.cartSubject.next([...this.cartItems]);
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next([]);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\shared\services\firestore.service.ts
import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // Додавання документа
  addDocument<T>(collectionName: string, data: T): Promise<string> {
    const colRef = collection(this.firestore, collectionName);
    return addDoc(colRef, data).then((docRef) => docRef.id);
  }

  // Отримання одного документа за ID
  getDocument<T>(collectionName: string, id: string): Observable<T | undefined> {
    const docRef = doc(this.firestore, collectionName, id);
    return new Observable((observer) => {
      getDoc(docRef).then((snapshot) => {
        observer.next(snapshot.exists() ? (snapshot.data() as T) : undefined);
        observer.complete();
      }).catch((error) => observer.error(error));
    });
  }

  // Отримання всіх документів колекції
  getCollection<T>(collectionName: string): Observable<T[]> {
    const colRef = collection(this.firestore, collectionName);
    return collectionData(colRef, { idField: 'id' }) as Observable<T[]>;
  }

  // Оновлення документа
  updateDocument<T>(collectionName: string, id: string, data: Partial<T>): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    return updateDoc(docRef, data);
  }

  // Видалення документа
  deleteDocument(collectionName: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    return deleteDoc(docRef);
  }
}



src\app\shared\services\payment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';

interface PaymentRequest {
  amount: number;
  currency: string;
  description?: string;
  email: string;
}

interface PaymentResponse {
  success: boolean;
  paymentUrl?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private stripeApiUrl = 'https://api.stripe.com/v1/checkout/sessions';
  private goPayApiUrl = 'https://api.gopay.com/payments/create';

  constructor(private http: HttpClient) {}

  createStripePayment(paymentData: PaymentRequest): Observable<PaymentResponse> {
    const headers = new HttpHeaders({ Authorization: `Bearer YOUR_STRIPE_SECRET_KEY` });
    return this.http.post<PaymentResponse>(this.stripeApiUrl, paymentData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  createGoPayPayment(paymentData: PaymentRequest): Observable<PaymentResponse> {
    const headers = new HttpHeaders({ Authorization: `Bearer YOUR_GOPAY_SECRET_KEY` });
    return this.http.post<PaymentResponse>(this.goPayApiUrl, paymentData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  processBankTransfer(paymentData: PaymentRequest): PaymentResponse {
    return {
      success: true,
      paymentUrl: 'https://yourbank.com/payment-details',
    };
  }

  private handleError(error: any) {
    console.error('Error occurred:', error);
    return throwError(() => new Error(error));
  }
}



C:\Users\4sv\Desktop\shop-ang-19\src\app\shared\services\telegram.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private botToken = environment.telegramBotToken;
  private chatId = environment.telegramChatId;
  private apiUrl = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

  constructor(private http: HttpClient) {}

  sendOrderNotification(orderDetails: string): Observable<any> {
    const message = `📦 Нове замовлення!\n${orderDetails}`;
    const payload = {
      chat_id: this.chatId,
      text: message,
      parse_mode: 'Markdown',
    };
    return this.http.post(this.apiUrl, payload);
  }
}
