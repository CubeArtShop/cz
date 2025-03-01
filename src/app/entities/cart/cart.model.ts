import { IProduct } from '../product/product.model';

export interface ICartItem extends IProduct {
  quantity: number;
}
