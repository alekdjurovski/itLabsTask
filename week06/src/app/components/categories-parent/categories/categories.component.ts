import { Component, OnInit, Input } from '@angular/core';
import { ICategories } from '../../../model/category';
import { CategoryService } from '../../../services/category.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  id: number;
  name: string;
  parentCategoryId: number;
  searchName: string;
  showSearch = false;
  editName: any;
  editId: number;
  inName: string;

  category: any = {
    // id: null,
    name: ''
    // products: [],
    // parentCategoryId: null
  };
  oldName: any;
  editRow: ICategories;

  constructor(private _service: CategoryService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._service.getCategories().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }

  addCategory() {
    this.category.name = this.inName;
    this._service.addCategories(this.category).subscribe(res => {
      console.log(res);
      this.getCategories();
    });
  }

  search() {
    if (this.searchName) {
      this.showSearch = true;
      this._service.searchCategories(this.searchName).subscribe(res => {
        return (this.categories = res);
      });
    } else {
      this.resetSearch();
    }
  }

  resetSearch() {
    if (this.searchName === '') {
      this.getCategories();
    }
  }
  clearSearch() {
    this.searchName = '';
    this.resetSearch();
    this.showSearch = false;
  }

  editCategory(id, name: ICategories[]) {
    this.editName = name;
    this.editId = id;
    this._service.categoryData = name;
  }

  saveCategory() {
  this.category.name = this.editName;
  this.category.id = this.editId;
  this._service.editCategories(this.category.id, this.category).subscribe(data => {this.getCategories(); }  );
  }

  removeCategory(id: any) {
      this._service.deleteCategories(id).subscribe(res => {
      this.getCategories();
    });
  }
}
