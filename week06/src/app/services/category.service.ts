import { Injectable } from '@angular/core';
import { ICategories } from '../model/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  public getCategoryUrl = 'http://127.0.0.1:3000/categories';


  getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(this.getCategoryUrl);
  }


}
