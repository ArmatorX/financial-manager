import { DocumentData, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export interface Converter<T> {
    toFirestore(model: T): DocumentData;
    fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): T;
}