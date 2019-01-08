import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../interface/customer';
// import {customers} from '../../../assets/data/customers.json';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public customers: any = [];


  constructor(private _tableService: TableService) { }

  ngOnInit() {
      this._tableService.getCustomers().subscribe(data => {this.customers = data; });
    }
}
