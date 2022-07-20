import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DictamensRoutingModule } from './dictamens-routing.module';
import { DictamentListComponent } from './dictament-list/dictament-list.component';
import { DictamentDetailComponent } from './dictament-detail/dictament-detail.component';
import { AdminModule } from '../admin.module';



@NgModule({
  declarations: [
    DictamentListComponent,
    DictamentDetailComponent
  ],
  imports: [
    CommonModule,
    DictamensRoutingModule,
    AdminModule
  ]
})
export class DictamensModule { }
