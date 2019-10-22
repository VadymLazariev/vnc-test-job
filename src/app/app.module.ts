import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsLongPollingComponent } from './rxjs-long-polling/rxjs-long-polling.component';
import {CoreModule} from './core/core.module';
import { LogInComponent } from './log-in/log-in.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NumbersListComponent } from './numbers-list/numbers-list.component';
import { SearchMessageComponent } from './search-message/search-message.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsLongPollingComponent,
    LogInComponent,
    NumbersListComponent,
    SearchMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
