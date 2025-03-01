import { Injectable } from '@angular/core';
import { Firestore, doc, docData, setDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IShippingAddress } from './shipping.model';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  private collectionName = 'shipping_addresses';

  constructor(private firestore: Firestore) {}

  // Збереження або оновлення адреси доставки
  saveShippingAddress(userId: string, shippingData: IShippingAddress): Promise<void> {
    const shippingDocRef = doc(this.firestore, `${this.collectionName}/${userId}`);
    return setDoc(shippingDocRef, shippingData, { merge: true });
  }

  // Отримання адреси доставки
  getShippingAddress(userId: string): Observable<IShippingAddress | undefined> {
    const shippingDocRef = doc(this.firestore, `${this.collectionName}/${userId}`);
    return docData(shippingDocRef, { idField: 'id' }) as Observable<IShippingAddress | undefined>;
  }

  // Видалення адреси доставки
  deleteShippingAddress(userId: string): Promise<void> {
    const shippingDocRef = doc(this.firestore, `${this.collectionName}/${userId}`);
    return deleteDoc(shippingDocRef);
  }
}
