import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  collectionData,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // Додавання документа
  addDocument<T>(collectionName: string, data: T): Promise<string> {
    const colRef = collection(this.firestore, collectionName);
    return addDoc(colRef, data).then((docRef) => docRef.id);
  }

  // Отримання одного документа за ID
  getDocument<T>(collectionName: string, id: string): Observable<T | undefined> {
    const docRef = doc(this.firestore, collectionName, id);
    return new Observable((observer) => {
      getDoc(docRef).then((snapshot) => {
        observer.next(snapshot.exists() ? (snapshot.data() as T) : undefined);
        observer.complete();
      }).catch((error) => observer.error(error));
    });
  }

  // Отримання всіх документів колекції
  getCollection<T>(collectionName: string): Observable<T[]> {
    const colRef = collection(this.firestore, collectionName);
    return collectionData(colRef, { idField: 'id' }) as Observable<T[]>;
  }

  // Оновлення документа
  updateDocument<T>(collectionName: string, id: string, data: Partial<T>): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    return updateDoc(docRef, data);
  }

  // Видалення документа
  deleteDocument(collectionName: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    return deleteDoc(docRef);
  }
}
