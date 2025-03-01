import { Component, Input } from '@angular/core';
import { IProduct } from '../../../entities/product/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { ICartItem } from '../../../entities/cart/cart.model';  // імпортуємо ICartItem
import { CurrencyPipe } from '../../../shared/pipes/currency.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  imports: [CurrencyPipe, TranslateModule],
})
export class ProductCardComponent {
  @Input() product!: IProduct; // Приймаємо продукт через Input

  constructor(private cartService: CartService) {}

  // Функція додавання продукту в кошик
  addToCart(): void {
    const cartItem: ICartItem = {
      ...this.product,  // Копіюємо всі властивості продукту
      quantity: 1,      // Додаємо кількість
    };
    this.cartService.addToCart(cartItem); // Викликаємо метод з CartService для додавання в кошик
  }
}
