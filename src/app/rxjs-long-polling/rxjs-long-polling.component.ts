import { Component, OnInit } from '@angular/core';
import {HttpService} from '../core/services/http.service';
import {UserService} from '../core/services/user.service';
import {from, Observable, timer} from 'rxjs';
import {CurrentTime} from '../core/models/current-time';
import {filter, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-long-polling',
  templateUrl: './rxjs-long-polling.component.html',
  styleUrls: ['./rxjs-long-polling.component.scss']
})
export class RxjsLongPollingComponent implements OnInit {

  constructor(private http: HttpService,
              private userService: UserService) { }

  currentTime$: Observable<CurrentTime> = new Observable<CurrentTime>();

  onlineStatus$: Observable<boolean> = new Observable<boolean>();

  isOnline: boolean;

  ngOnInit() {
    this.onlineStatus$ = this.userService.getOnlineStatus();

    this.currentTime$ = timer(0, 5000)
      .pipe(
        filter(() => this.userService.isUserOnline$.value),
        switchMap(() => from(this.http.getCurrentTime('Europe/Zaporozhye')))
      );
  }

  changeUserState() {
    alert(`user is ${this.isOnline ? 'online' : 'offline'}`);
    this.userService.isUserOnline$.next(this.isOnline);
    this.isOnline = !this.isOnline;
  }
}
