import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseRepository } from '../../shared/repositories/firebase.repository';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collectionName = 'users';

  constructor(private firebaseRepository: FirebaseRepository) {}

  // 🔹 Отримати дані користувача за ID
  getUserById(userId: string): Observable<IUser | undefined> {
    return this.firebaseRepository.getDocument<IUser>(this.collectionName, userId);
  }

  // 🔹 Оновити дані користувача
  updateUser(userId: string, data: Partial<IUser>): Promise<void> {
    return this.firebaseRepository.updateDocument(this.collectionName, userId, data);
  }
}
