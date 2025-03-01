export interface IShippingAddress {
  id?: string; // id може бути, але не обов'язково
  fullName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
