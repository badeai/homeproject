import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}
  getCategories() {
    return this.db.list('/categories');
    // .valueChanges();
  }
}
