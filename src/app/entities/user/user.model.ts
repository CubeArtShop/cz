import { IShippingAddress } from "../shipping/shipping.model";

export interface IUser {
  id: string;
  email: string;
  name: string;
  phone?: string; // Номер телефону для зв'язку
  address?: IShippingAddress; // Адреса доставки
  createdAt: string;
  updatedAt: string;
}
