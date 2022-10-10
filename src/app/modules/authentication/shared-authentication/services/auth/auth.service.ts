import { Injectable } from '@angular/core';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  signOut,
  Auth,
  User,
} from '@firebase/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth;
  user$: Observable<User>;
  constructor() {}

  initialize() {
    this.auth = getAuth();
    this.user$ = new Observable(obs => this.auth.onAuthStateChanged(obs));
  }

  signInWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(this.auth, provider);
  }

  signOut() {
    return signOut(this.auth);
  }

  isLoggedIn(): Observable<boolean> {
    return this.user$.pipe(map((user) => !!user));
  }
}
