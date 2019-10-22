import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CurrentTime} from '../models/current-time';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private  http: HttpClient) { }

  getCurrentTime(location: string): Observable<CurrentTime> {
    return  this.http.get<CurrentTime>(`http://worldtimeapi.org/api/timezone/${location}`);
  }
}
