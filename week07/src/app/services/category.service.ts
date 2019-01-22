import { Injectable } from '@angular/core';
import { ICategories } from '../model/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public getPostUrl = 'http://127.0.0.1:3000/categories';
  public deleteCategoryUrl = 'http://127.0.0.1:3000/categories/';
  public searchUrl = 'http://127.0.0.1:3000/categories?filter[where][name][eq]=';
  categoryData = {
    name: ''
  };
  editId: number;
  oldName = this.categoryData.name;
  categoriesList: ICategories[];
  addId: number;


  constructor(private http: HttpClient) {}

  getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(this.getPostUrl);
  }

  addCategories(category) {
    return this.http.post<any>(this.getPostUrl, category);
  }

  getOneCategory(): Observable<any> {
    return this.http.get<any>(this.getPostUrl + '/' + this.editId);
  }

  editCategories(id, category) {
    return this.http.put<any>(this.getPostUrl + '/' + id, category);
  }

  searchCategories(name) {
    return this.http.get(this.searchUrl + name);
  }

  addNew() {}

  deleteCategories(id) {
    return this.http.delete(this.deleteCategoryUrl + id);
  }
}
