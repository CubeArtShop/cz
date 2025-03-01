import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from './product.model';
import { productsJSON } from './product.db';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private collectionName = 'products';

  // constructor(private firebaseRepository: FirebaseRepository) {}

  // 🔹 Отримання всіх товарів
  getProducts(): Observable<IProduct[]> {
    return of(productsJSON);
  }

  getProductsByCategory(category?: string): Observable<IProduct[]> {
    return of(category ? productsJSON.filter(product => product.category === category) : []);
  }

  // 🔹 Отримання товару за ID
  getProductById(id: string): Observable<IProduct | undefined> {
    const product = productsJSON.find(p => p.id === id);
    return of(product);
  }

  // 🔹 Додавання нового товару (мокова реалізація)
  addProduct(product: Omit<IProduct, 'id'>): Promise<string> {
    const newProduct: IProduct = {
      id: (productsJSON.length + 1).toString(),
      ...product
    };
    productsJSON.push(newProduct);
    return Promise.resolve(newProduct.id);
  }

  // 🔹 Оновлення товару (мокова реалізація)
  updateProduct(id: string, product: Partial<IProduct>): Promise<void> {
    const index = productsJSON.findIndex(p => p.id === id);
    if (index !== -1) {
      productsJSON[index] = { ...productsJSON[index], ...product };
    }
    return Promise.resolve();
  }

  // 🔹 Видалення товару (мокова реалізація)
  deleteProduct(id: string): Promise<void> {
    const index = productsJSON.findIndex(p => p.id === id);
    if (index !== -1) {
      productsJSON.splice(index, 1);
    }
    return Promise.resolve();
  }
}
