import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiciadosRoutingModule } from './indiciados-routing.module';
import { IndiciadosListComponent } from './indiciados-list/indiciados-list.component';
import { IndiciadosDetailComponent } from './indiciados-detail/indiciados-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    IndiciadosListComponent,
    IndiciadosDetailComponent
  ],
  imports: [
    CommonModule,
    IndiciadosRoutingModule,
    AdminModule
  ]
})
export class IndiciadosModule { }
