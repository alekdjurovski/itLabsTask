import { Component, OnInit } from '@angular/core';
import { ICategories } from '../../model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: ICategories;
  public category: ICategories[];

  constructor(private _service: CategoryService) { }

  ngOnInit() {
    this.getCategories();

  }

  getCategories() {
    this._service.getCategories().subscribe(data => {console.log(data);
    this.category = data;
    });

  }

}
