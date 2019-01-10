import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';
import { ICustomer } from '../../interface/customer';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  constructor(private tableService: TableService) {}

  customer = {
    name: '',
    address: '',
    city: '',
    pin: '',
    country: ''
  };
  name: string;
  address: any;
  city: any;
  pin: any;
  country: any;

  ngOnInit() {}

  onSubmit(userForm: any) {
    // debugger;
  }

  addCustomer() {
    console.log('prv');
    this.customer.name = this.name;
    this.customer.address = this.address;
    this.customer.city = this.city;
    this.customer.pin = this.pin;
    this.customer.country = this.country;

    this.tableService.addCustomer(this.customer).subscribe(res => {});
  }
}
