import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
  GoogleAuthProvider,
  signInWithPopup,
  User as FirebaseUser,
} from '@angular/fire/auth';
import { from, map, Observable } from 'rxjs';
import { IUser } from '../../entities/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  currentUserSig = signal<IUser | null>(null); // Сигнал для збереження поточного користувача

  constructor() {
    user(this.auth)
      .pipe(
        map((firebaseUser) =>
          firebaseUser ? this.mapUser(firebaseUser) : null
        )
      )
      .subscribe((user) => this.currentUserSig.set(user)); // Оновлення сигналу при зміні користувача
  }

  register(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => updateProfile(res.user, { displayName: username }))
      .then(() => this.updateCurrentUser());

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.auth, email, password)
      .then(() => this.updateCurrentUser());

    return from(promise);
  }

  logout(): Observable<void> {
    const promise = signOut(this.auth).then(() => this.currentUserSig.set(null));
    return from(promise);
  }

  loginWithGoogle(): Observable<void> {
    const provider = new GoogleAuthProvider();
    const promise = signInWithPopup(this.auth, provider)
      .then(() => this.updateCurrentUser());

    return from(promise);
  }

  registerWithGoogle(): Observable<void> {
    const provider = new GoogleAuthProvider();
    const promise = signInWithPopup(this.auth, provider)
      .then((res) => {
        const user = res.user;
        if (user) {
          return updateProfile(user, { displayName: user.displayName });
        }
        return Promise.resolve();
      })
      .then(() => this.updateCurrentUser());

    return from(promise);
  }

  private updateCurrentUser(): void {
    const firebaseUser = this.auth.currentUser;
    this.currentUserSig.set(firebaseUser ? this.mapUser(firebaseUser) : null);
  }

  private mapUser(firebaseUser: FirebaseUser): IUser {
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email ?? '',
      name: firebaseUser.displayName ?? '',
      createdAt: firebaseUser.metadata.creationTime ?? '',
      updatedAt: firebaseUser.metadata.lastSignInTime ?? '',
    };
  }
}
