import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  collectionData,
  DocumentData,
  WithFieldValue,
  FirestoreDataConverter,
  CollectionReference,
  DocumentReference
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRepository {
  constructor(private firestore: Firestore) {}

  // 🔹 Генерація кастомного конвертера для типу T
  private converter<T extends DocumentData>(): FirestoreDataConverter<T> {
    return {
      toFirestore(data: WithFieldValue<T>): DocumentData {
        return { ...data };
      },
      fromFirestore(snapshot): T {
        return snapshot.data() as T;
      }
    };
  }

  // 🔹 Отримання одного документа за ID (✅ Виправлено)
  getDocument<T extends DocumentData>(collectionName: string, id: string): Observable<T | undefined> {
    const collectionRef = collection(this.firestore, collectionName).withConverter(this.converter<T>());
    const docRef = doc(collectionRef, id); // ✅ Тепер doc() працює правильно

    return new Observable(observer => {
      getDoc(docRef)
        .then(snapshot => {
          observer.next(snapshot.exists() ? snapshot.data() : undefined);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }

  // 🔹 Отримання всіх документів колекції
  getCollection<T extends DocumentData>(collectionName: string): Observable<T[]> {
    const colRef = collection(this.firestore, collectionName).withConverter<T>(this.converter<T>());
    return collectionData(colRef, { idField: 'id' }) as Observable<T[]>;
  }

  // 🔹 Додавання нового документа
  addDocument<T extends DocumentData>(collectionName: string, data: WithFieldValue<T>): Promise<string> {
    const colRef = collection(this.firestore, collectionName).withConverter<T>(this.converter<T>());
    return addDoc(colRef, data).then(docRef => docRef.id);
  }

  // 🔹 Оновлення документа (✅ Виправлено)
  updateDocument<T extends DocumentData>(collectionName: string, id: string, data: Partial<T>): Promise<void> {
    const collectionRef = collection(this.firestore, collectionName).withConverter(this.converter<T>());
    const docRef = doc(collectionRef, id); // ✅ Більше немає проблем із типами

    return updateDoc(docRef, data as WithFieldValue<T>);
  }

  // 🔹 Видалення документа
  deleteDocument(collectionName: string, id: string): Promise<void> {
    const collectionRef = collection(this.firestore, collectionName);
    const docRef = doc(collectionRef, id);
    return deleteDoc(docRef);
  }
}
