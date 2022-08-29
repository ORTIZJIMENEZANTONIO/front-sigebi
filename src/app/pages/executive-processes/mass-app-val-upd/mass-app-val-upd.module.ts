import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MassAppValUpdRoutingModule } from './mass-app-val-upd-routing.module';
import { MassAppValUpdDetailComponent } from './mass-app-val-upd-detail/mass-app-val-upd-detail.component';
import { MassAppValUpdListComponent } from './mass-app-val-upd-list/mass-app-val-upd-list.component';


@NgModule({
  declarations: [
    MassAppValUpdDetailComponent,
    MassAppValUpdListComponent
  ],
  imports: [
    CommonModule,
    MassAppValUpdRoutingModule
  ]
})
export class MassAppValUpdModule { }
