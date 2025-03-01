import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

interface PaymentRequest {
  amount: number;
  currency: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private stripePublicKey = environment.stripeSecreetApiKey ; // Your Stripe public key

  constructor(private http: HttpClient) {}

  createStripeCheckoutSession(paymentData: PaymentRequest): Observable<any> {
    return this.http.post<any>('https://api.stripe.com/v1/checkout/sessions', paymentData, {
      headers: {
        Authorization: `Bearer ${this.stripePublicKey}`,
      },
    });
  }

  redirectToStripeCheckout(sessionId: string): void {
    // Ensure Stripe is available globally from the CDN
    // const stripe = (window as any).Stripe(this.stripePublicKey); // Cast window to any to access Stripe

    const stripe = (window as any).Stripe(this.stripePublicKey);  // Correct access of Stripe from global window

    stripe.redirectToCheckout({ sessionId });
  }
}
