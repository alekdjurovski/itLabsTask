import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';
import { ICustomer } from '../../interface/customer';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  constructor(
    private _tableService: TableService,
    private firestore: AngularFirestore
  ) {}

  customer = {
    id: null,
    name: '',
    address: '',
    city: '',
    pin: '',
    country: ''
  };
  id: number;
  name: string;
  address: any;
  city: any;
  pin: any;
  country: any;

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    // tslint:disable-next-line:curly
    if (form != null)
    form.resetForm();
    this._tableService.customerData = {
      id: null,
      name: '',
      address: '',
      city: '',
      pin: null,
      country: ''
    // tslint:disable-next-line:semicolon
    }
  }

  onSubmit(form: NgForm) {
    // tslint:disable-next-line:no-debugger
    // debugger;
    const data = form.value;
    console.log(data);
    this.firestore.collection('customers').add(data);
    this.resetForm(form);

  }

  // addCustomer() {
  //   console.log('prv');
  //   this.customer.name = this.name;
  //   this.customer.address = this.address;
  //   this.customer.city = this.city;
  //   this.customer.pin = this.pin;
  //   this.customer.country = this.country;

  //   this._tableService.addCustomer(this.customer).subscribe(res => {});
  // }
}
