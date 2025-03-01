import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const secureReq = req.clone({
      setHeaders: {
        // 'X-XSS-Protection': '1; mode=block',  // Захист від XSS
        // 'Content-Security-Policy': "default-src 'self'", // Забороняємо підключення сторонніх ресурсів
        // 'X-Frame-Options': 'DENY',  // Захист від Clickjacking
        // 'Referrer-Policy': 'no-referrer', // Обмежуємо передачу реферера
        // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload' // Використовуємо тільки HTTPS
      }
    });

    return next.handle(secureReq);
  }
}
