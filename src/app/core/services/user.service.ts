import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isUserOnline$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  getOnlineStatus(): Observable<boolean> {
    return  this.isUserOnline$.asObservable();
  }
}
