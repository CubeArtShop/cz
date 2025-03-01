import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartItem } from '../../entities/cart/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: ICartItem[] = [];
  private cartSubject = new BehaviorSubject<ICartItem[]>([]);

  constructor() {
    // Завантажуємо дані з localStorage при ініціалізації сервісу, якщо це браузер
    if (this.isBrowser()) {
      this.loadCartFromLocalStorage();
    }
  }

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
    this.updateCart();
  }

  removeFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.updateCart();
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Оновлюємо cartSubject і зберігаємо дані в localStorage
  private updateCart(): void {
    this.cartSubject.next([...this.cartItems]);
    if (this.isBrowser()) {
      this.saveCartToLocalStorage();
    }
  }

  // Зберігаємо кошик в localStorage
  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  // Завантажуємо кошик з localStorage
  private loadCartFromLocalStorage(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
      this.cartSubject.next([...this.cartItems]);
    }
  }

  // Перевірка, чи виконується код в браузері
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }
}
