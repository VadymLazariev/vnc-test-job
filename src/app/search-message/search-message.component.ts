import { Component, OnInit } from '@angular/core';
import {Message} from '../core/models/message';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-search-message',
  templateUrl: './search-message.component.html',
  styleUrls: ['./search-message.component.scss']
})
export class SearchMessageComponent implements OnInit {

  constructor() { }

  messages: Message[] = [
    {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'},
    {id: 2, text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'},
    {id: 3, text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'}
  ];

  filteredMessages: Observable<Message[]> = new Observable<Message[]>();

  ngOnInit() {
  }

  searchMessages(keyword: string): Observable<Message[]> {
    return this.filteredMessages = of(this.messages
      .filter(message => message.text.toLowerCase().includes(keyword.toLowerCase()))
    );
  }
}
