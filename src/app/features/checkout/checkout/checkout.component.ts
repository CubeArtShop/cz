import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { PaymentService } from '../../../shared/services/payment.service';
import { ICartItem } from '../../../entities/cart/cart.model';
import { CommonModule } from '@angular/common';
import { ShippingFormComponent } from '../shipping-form/shipping-form.component';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  imports: [CommonModule, ShippingFormComponent, FormsModule], // Remove CurrencyPipe if unused
})
export class CheckoutComponent {
  cartItems: ICartItem[] = [];
  totalPrice: number = 0;
  email: string = ''; // Email користувача для платежу

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

  onCheckout(): void {
    if (!this.email) {
      alert('Please provide your email address.');
      return;
    }

    const paymentData = {
      amount: this.totalPrice,
      currency: 'CZK',  // Валюта
      email: this.email,
    };

    // Викликаємо сервіс для створення сесії в Stripe
    this.paymentService.createStripeCheckoutSession(paymentData).subscribe({
      next: (response) => {
        if (response.sessionId) {
          // Перенаправлення на сторінку Stripe Checkout
          this.paymentService.redirectToStripeCheckout(response.sessionId);
        } else {
          console.error('Failed to create checkout session:', response);
          alert('Something went wrong. Please try again.');
        }
      },
      error: (err) => {
        console.error('Payment request failed:', err);
        alert('There was an error processing your payment.');
      },
    });
  }
}
