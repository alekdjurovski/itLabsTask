import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  btnEnable = false;
  category: any = {
    // id: null,
    name: ''
    // products: [],
    // parentCategoryId: null
  };
  inName: string;

  constructor(private _service: CategoryService) {}

  ngOnInit() {}

  addCategory() {
    this.category.name = this.inName;
    this._service.addCategories(this.category).subscribe(res => {
      this._service.getCategories();
    });
  }
}
