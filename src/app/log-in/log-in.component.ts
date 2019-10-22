import { Component, OnInit } from '@angular/core';
import {UserService} from '../core/services/user.service';
import {FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private userService: UserService,
              private fb: FormBuilder) { }

  loggedIn: boolean;

  onlineStatus$: Observable<boolean> = new Observable<boolean>();

  loggedInStatus$: Observable<boolean> = new Observable<boolean>();

  loginForm = this.fb.group({
    login: [''],
    password: [''],
  });

  ngOnInit() {
    this.loggedInStatus$ = this.userService.getUserLoginStatus();
    this.onlineStatus$ = this.userService.getOnlineStatus();
  }

  login() {
    this.loggedIn = true;
    this.userService.isUserLoggedIn$.next(this.loggedIn);
  }
}
