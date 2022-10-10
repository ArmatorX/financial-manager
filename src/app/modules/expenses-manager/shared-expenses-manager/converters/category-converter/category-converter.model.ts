import { QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
import { Converter } from 'src/app/shared/interfaces/converter.interface';
import { Category } from '../../interfaces/category.interface';

export class CategoryConverter implements Converter<Category> {
  constructor(private readonly userId: string) {}
  toFirestore(model: Category) {
    return {
      creatorUID: this.userId,
      color: model.color,
      iconName: model.iconName,
      name: model.name,
    };
  }

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data(options)!;
    return {
      color: data.color,
      iconName: data.iconName,
      name: data.name,
    };
  }
}
