import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RxjsLongPollingComponent} from './rxjs-long-polling/rxjs-long-polling.component';

const routes: Routes = [
  { path: 'rxjs-polling', component: RxjsLongPollingComponent  },
  { path: '', redirectTo: 'rxjs-polling', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
