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
