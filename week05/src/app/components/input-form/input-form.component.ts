import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';
// import { ICustomer } from '../../interface/customer';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

// komenratite se so lokalen json server

  // customer = {
  //   id: null,
  //   name: '',
  //   address: '',
  //   city: '',
  //   pin: '',
  //   country: ''
  // };
  // id: number;
  // name: string;
  // address: any;
  // city: any;
  // pin: any;
  // country: any;

  constructor(
    public _tableService: TableService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
    form.resetForm();
    }
    this._tableService.customerData = {
      id: null,
      name: '',
      address: '',
      city: '',
      pin: null,
      country: ''
    };
  }

  onSubmit(form: NgForm) {
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
