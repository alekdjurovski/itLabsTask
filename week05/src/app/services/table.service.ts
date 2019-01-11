import { Injectable } from '@angular/core';
import { ICustomer } from '../interface/customer';
// import {customers} from '../../assets/data/customers.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  customerData: ICustomer;
  constructor(private http: HttpClient,
    private firestore: AngularFirestore) {

  }

// ova dolu e so json- server
  // public customerUrl = 'http://localhost:3000/users';

  // getCustomers(): Observable<ICustomer[]> {
  //   return this.http.get<ICustomer[]>(this.customerUrl);
  // }

  // addCustomer(customer) {
  //   return this.http.post<any>(this.customerUrl, customer);
  // }

  getCustomers() {
    return this.firestore.collection('customers').snapshotChanges();

  }



}
