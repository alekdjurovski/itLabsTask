import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ICategories } from '../../../model/category';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  btnEnable = false;
  name: number;
  editName: any;
  editId: number;
  id: number;
  category: any = {
    // id: null,
    name: ''
    // products: [],
    // parentCategoryId: null
  };
  inName: string;
  constructor(private _service: CategoryService) { }

  ngOnInit() {
    this.getCategory(this.id);
  }

  getCategory(id) {
    debugger;
   return this._service.getOneCategory(id).subscribe(data => {console.log(data); });
  }

  editCategory(id, name: ICategories[]) {
    this.editName = name;
    this.editId = id;
    this._service.categoryData = name;
  }

  saveCategory() {
    this.category.name = this.editName;
    this.category.id = this.editId;
    this._service
      .editCategories(this.category.id, this.category)
      .subscribe(data => {
        this._service.getCategories();
      });
  }


}
