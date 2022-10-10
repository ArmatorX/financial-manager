import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/modules/authentication/shared-authentication/services/auth/auth.service';
import { FirestoreDatabaseService } from 'src/app/shared/services/firestore-databse/firestore-database.service';
import { CategoryConverter } from '../../converters/category-converter/category-converter.model';
import { Category } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private path = '/categories';
  private converter: CategoryConverter;
  constructor(private firestore: FirestoreDatabaseService) {
  }

  initialize(uid: string) {
      this.converter = new CategoryConverter(uid);
  }

  getAllCategories(): Promise<Category[]> {
    return this.firestore.query<Category>(this.path, this.converter);
  }
}
