import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
// export class CategoryService {
//   constructor(private db: AngularFireDatabase) {}
//   getCategories() {
//     return this.db.list('/categories');
//     // .valueChanges();
//aflCategories!: AngularFireList<any>;
// }
export class CategoryService {
  aflCategories: AngularFireList<any> | undefined;
  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    this.aflCategories = this.db.list('/categories', (category) =>
      category.orderByChild('name')
    );
    return this.aflCategories
      .snapshotChanges()
      .pipe(
        map((changes: any[]) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
}
