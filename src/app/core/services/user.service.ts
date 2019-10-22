import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isUserOnline$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getOnlineStatus(): Observable<boolean> {
    return  this.isUserOnline$.asObservable();
  }

  getUserLoginStatus() {
    return this.isUserLoggedIn$.asObservable();
  }
}
