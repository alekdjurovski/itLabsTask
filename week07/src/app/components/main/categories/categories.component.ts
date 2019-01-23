import { Component, OnInit, Input } from '@angular/core';
import { ICategories } from '../../../model/category';
import { CategoryService } from '../../../services/category.service';

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
  parentCatName: string;
  searchName: string;
  showSearch = false;
  hideForm = false;
  editName: any;
  editId: number;
  inName: string;
  categoryList = [
    {
      id: null,
      name: '',
      description: '',
      // products: [],
      parentCategoryId: null,
      parentCatName: ''
    }
  ];
  oldName: any;
  editRow: ICategories;
  parentId: number;

  constructor(private _service: CategoryService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this._service.getCategories().subscribe(data => {
      this.categories = data;
      // this.categories.id = this._service.addId;
      this._service.categoriesList = data;
      // debugger;
      // this.findParent();
    });
  }

  // findParent() {
  //   for (let i = 0; i <= this.categories.length; i++) {
  //     if (this.categories[i].parentCategoryId) {
  //       this.parentId = this.categories[i].parentCategoryId;
  //       debugger;
  //       for (let x = 0; x <= this.categories.length; x++) {
  //         if (this.parentId === this.categories[x].id) {
  //           this.categoryList[i] = {
  //             id: this.categories[i].id,
  //             name: this.categories[i].name,
  //             description: this.categories[i].description,
  //             parentCategoryId: this.parentId,
  //             parentCatName: this.categories[x].name
  //           };
  //         }
  //       }
  //     } else {
  //       this.categoryList[i] = this.categories[i];
  //     }
  //   }
  // }

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

  editCategory(id) {
    this._service.editId = id;
  }

  removeCategory(id) {
    if (confirm('Are you sure you want to perform this action?')) {
      this._service.deleteCategories(id).subscribe(res => {
        this.getCategories();
      });
    }
  }

}
