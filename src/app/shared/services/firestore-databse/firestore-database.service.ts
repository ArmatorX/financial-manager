import { Injectable } from '@angular/core';
import { Firestore, getFirestore, collection, query, QueryConstraint, getDocs } from "firebase/firestore";
import { Converter } from '../../interfaces/converter.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDatabaseService {
  private db: Firestore;
  private prefix: string;

  constructor() { }

  initialize(uid: string) {
    this.db = getFirestore();
    this.prefix = `/users/${uid}`;

  }

  async query<T>(path: string, converter: Converter<T>, ...conditions: QueryConstraint[]): Promise<T[]> {
    const collectionRef = collection(this.db, this.getPath(path)).withConverter(converter);
    const q = query(collectionRef, ...conditions);
    const data = (await getDocs(q)).docs.map(doc => doc.data()!);
    return data;
  }

  addDocument<T>(data: T, ) {

  }

  editDocument<T>() {}

  deleteDocument() {}

  private isRoot(path: string): boolean {
    if (path.startsWith('/')) {
      return true;
    }

    return false;
  }

  private getPath(path: string): string {
    if(this.isRoot(path)) {
      return path;
    }
    return `${this.prefix}/${path}`
  }
}
