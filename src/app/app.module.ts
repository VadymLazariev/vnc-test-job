import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsLongPollingComponent } from './rxjs-long-polling/rxjs-long-polling.component';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    RxjsLongPollingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
