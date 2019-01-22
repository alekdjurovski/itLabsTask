import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { IToast } from '../../model/toaster';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  private subject = new Subject<IToast>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
   router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
     if (this.keepAfterRouteChange) {
      this.keepAfterRouteChange = false;
     } else {
      this.clear();
     }
    }
   });
  }

 getToast(): Observable<any> {
  return this.subject.asObservable();
 }
 success(message, keepAfterRouteChange = true): void {
  this.toast(message, keepAfterRouteChange);
 }
 error(message, keepAfterRouteChange = true): void {
  this.toast(message, keepAfterRouteChange);
 }
 info(message: string, keepAfterRouteChange = true): void {
  this.toast(message, keepAfterRouteChange);
 }
 warn(message: string, keepAfterRouteChange = true): void {
  this.toast(message, keepAfterRouteChange);
 }
 toast(message: string, keepAfterRouteChange = true): void {
  this.keepAfterRouteChange = keepAfterRouteChange;
  this.subject.next(<IToast>{ message: message });
 }
 clear() {
  this.subject.next();
 }
}
