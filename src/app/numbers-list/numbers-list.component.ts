import { Component, OnInit } from '@angular/core';
import {interval, Observable, ReplaySubject} from 'rxjs';
import {buffer, tap, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-numbers-list',
  templateUrl: './numbers-list.component.html',
  styleUrls: ['./numbers-list.component.scss']
})
export class NumbersListComponent implements OnInit {

  constructor() { }

  myNumber$: ReplaySubject<number> = new ReplaySubject<number>();
  numbersList: Observable<number[]> = new Observable<number[]>();

  ngOnInit() {
    this.numbersList = this.getNumber();
  }

  getNumber(): Observable<number[]> {
    const source$ = interval(500).pipe(
      tap(() => {
        const randNum = Math.floor(Math.random() * 11);
        this.myNumber$.next(randNum);
      })
    );

    return this.myNumber$.asObservable().pipe(
      buffer(source$.pipe(
        throttleTime(2000)
      )),
    );
  }
}
