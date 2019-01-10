import { Injectable } from '@angular/core';
import { ICustomer } from '../interface/customer';
// import {customers} from '../../assets/data/customers.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  formData: ICustomer;
  constructor(private http: HttpClient) {

  }

  public customerUrl = 'https://api.jsonbin.io/b/5c37a66205d34b26f206a308';
  public customerCreateUrl = 'https://api.jsonbin.io/b';

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customerUrl);
  }

  addCustomer(customer) {
    return this.http.post<any>(this.customerCreateUrl, customer);
  }
}
