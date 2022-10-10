import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/modules/authentication/shared-authentication/services/auth/auth.service';
import { FirestoreDatabaseService } from '../firestore-databse/firestore-database.service';
import { CategoriesService } from 'src/app/modules/expenses-manager/shared-expenses-manager/services/categories/categories.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app: FirebaseApp;
  constructor(private auth: AuthService, private firestore: FirestoreDatabaseService, private categoryService: CategoriesService) { }

  initialize() {
    this.app = initializeApp(environment.firebaseConfig);
    this.auth.initialize();
    this.auth.user$.subscribe((user) => {
      if (!!user) {
        this.firestore.initialize(user.uid);
        this.categoryService.initialize(user.uid);
      }
    })
  }
}
