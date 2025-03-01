/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { SecurityInterceptor } from './app/core/interceptors/security.interceptor';
import { TranslateService, TranslateLoader, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

// Фабрика для завантаження JSON-файлів з перекладами
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideHttpClient(withInterceptorsFromDi()),
    // { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptor, multi: true },

    // ✅ Реєструємо ngx-translate правильно
    TranslateStore, // ⚠️ Це ВИРІШУЄ помилку `No provider for TranslateStore!`
    TranslateService,
    {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  ]
})
  .then(appRef => {
    // Отримуємо TranslateService після завантаження застосунку
    const translate = appRef.injector.get(TranslateService);
    translate.setDefaultLang('en'); // За замовчуванням англійська
    translate.use('en'); // Використовуємо англійську мову при старті
  })
  .catch((err) => console.error(err));
