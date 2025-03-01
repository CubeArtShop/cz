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
