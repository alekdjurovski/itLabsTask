import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-parent',
  templateUrl: './categories-parent.component.html',
  styleUrls: ['./categories-parent.component.scss']
})
export class CategoriesParentComponent implements OnInit {
showBtn = true;
  constructor() { }

  ngOnInit() {
  }

  hide() {
this.showBtn = !this.showBtn;
  }

}
