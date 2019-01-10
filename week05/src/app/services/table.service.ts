import { Injectable } from '@angular/core';
import { ICustomer } from '../interface/customer';
// import {customers} from '../../assets/data/customers.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http: HttpClient) {

  }

  public customerUrl = 'http://localhost:3000/users';

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customerUrl);
  }

  addCustomer(customer) {
    return this.http.post<any>(this.customerUrl, customer);
  }
}
