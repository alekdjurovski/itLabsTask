import { Component, OnInit } from '@angular/core';
import { ICategories } from '../../../model/category';
import { CategoryService } from '../../../services/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: ICategories[];
  id: number;
  name: string;
  form: any;
  category: any = {
    // id: null,
    name: '',
    // products: [],
    // parentCategoryId: null
};


  constructor(private _service: CategoryService) { }

  ngOnInit() {
    this.getCategories();

  }

  getCategories() {
    this._service.getCategories().subscribe(data => {console.log(data);
    this.categories = data;
    });

  }

  addCategory() {
    this.category.name = this.name;
    this._service.addCategories(this.category).subscribe(
      res => {console.log(res); this.getCategories(); });
    }

    search() {
      this._service.searchCategories(this.name).subscribe(
        res => {
          this.category = res;
        }
      );

    }

  removeCategory(id) {

    this._service.deleteCategories(id)
    .subscribe(
      res => {
      this.getCategories(); }
    );


  }

}
