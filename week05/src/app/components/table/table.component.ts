import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ICustomer } from '../../interface/customer';
// import {customers} from '../../../assets/data/customers.json';
import { TableService } from 'src/app/services/table.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { InputFormComponent } from '../input-form/input-form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(
    private _tableService: TableService,
    private firestore: AngularFirestore
  ) {}
  list: ICustomer[];
  rowData: [];
  searchName: string;
  public customers: any = [];
  @Output() myEvent = new EventEmitter();
  editRow: any;

  ngOnInit() {
    // komentarot e vtor nacin so json-server
    // this._tableService.getCustomers().subscribe(data => {this.customers = data; });
    this.showTable();
  }

  showTable() {
    this._tableService.getCustomers().subscribe(res => {
      this.list = res.map(item => {
        return ({
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as unknown) as ICustomer;
      });
    });
  }

  Search() {
    if (this.searchName !== '') {
      this.list = this.list.filter(res => {
        return res.name
          .toLocaleLowerCase()
          .match(this.searchName.toLocaleLowerCase());
      });
    } else if (this.searchName === '') {
      this.ngOnInit();
    }
  }

  readRow(name, add, city, pin, country) {
    const data = { name, add, city, pin, country };
    console.log({ name, add });
    alert(JSON.stringify(data));
  }

  edit(customer: ICustomer) {
    this.editRow = customer;
    this._tableService.customerData = customer;
  }
  save(form: NgForm) {
    this.myEvent.emit(null);
    const data = form.value.id;
    this.firestore.doc('customers/' + form.value.id).update(data);
    // this.resetForm(form);
  }

  deleteRow(id) {
    this.firestore.doc('customers/' + id).delete();
  }
}
