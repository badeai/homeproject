import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
// export class ProductFormComponent implements OnInit {
//   categories!: Observable<any>[];
//   constructor(categoryService: CategoryService) {
//     this.categories = categoryService.getCategories();
//   }

//   ngOnInit() {}
// }
export class ProductFormComponent implements OnInit {
  categories: Observable<any[]> | undefined;

  constructor(
    categoryService: CategoryService,
    private db: AngularFireDatabase
  ) {
    this.categories = categoryService.getCategories();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
