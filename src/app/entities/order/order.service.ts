import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseRepository } from '../../shared/repositories/firebase.repository';
import { IOrder } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private collectionName = 'orders';

  constructor(private firebaseRepository: FirebaseRepository) {}

  // 🔹 Створення нового замовлення
  createOrder(order: Omit<IOrder, 'id'>): Promise<string> {
    return this.firebaseRepository.addDocument(this.collectionName, order);
  }

  // 🔹 Отримання всіх замовлень користувача
  getOrders(userId: string): Observable<IOrder[]> {
    return this.firebaseRepository.getCollection<IOrder>(this.collectionName);
  }

  // 🔹 Отримання замовлення за ID
  getOrderById(orderId: string): Observable<IOrder | undefined> {
    return this.firebaseRepository.getDocument<IOrder>(this.collectionName, orderId);
  }
}
