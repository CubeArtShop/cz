import { IProduct } from "../product/product.model";

export interface IOrder {
  id: string;
  userId: string;
  products: IProduct[];
  totalAmount: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
  createdAt: string;
}
