import { Component, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';
import { ICustomer } from '../../interface/customer';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  customer = {};

  constructor(private tableService: TableService) { }

  ngOnInit() {
  }

  addCustomer() {
    // this.tableService.addCustomer(this.customer)
    // .subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // );

  }


}
