import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockerRoutingModule } from './locker-routing.module';
import { LockerListComponent } from './locker-list/locker-list.component';
import { LockerDetailComponent } from './locker-detail/locker-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    LockerListComponent,
    LockerDetailComponent
  ],
  imports: [
    CommonModule,
    LockerRoutingModule,
    AdminModule
  ]
})
export class LockerModule { }
