import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PopUpComponent } from '../components/pop-up/pop-up.component';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(private popup: MatDialog) { }

  deleteAlert() {
    this.popup.open(PopUpComponent, {
      height: '400px',
      width: '390px'
    });
  }
}
