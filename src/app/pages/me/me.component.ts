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
