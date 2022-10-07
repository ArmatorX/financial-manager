import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/modules/authentication/shared-authentication/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  constructor(private auth: AuthService) { }

  initialize() {
    this.app = initializeApp(environment.firebaseConfig);
    this.auth.initialize();
  }
}
