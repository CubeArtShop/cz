import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartItem } from '../../../entities/cart/cart.model';
import { CurrencyPipe } from '../../../shared/pipes/currency.pipe';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  imports: [CurrencyPipe]
})
export class CartItemComponent {
  @Input() item!: ICartItem;
  @Output() remove = new EventEmitter<void>();

  removeItem() {
    this.remove.emit();
  }
}
