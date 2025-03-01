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
