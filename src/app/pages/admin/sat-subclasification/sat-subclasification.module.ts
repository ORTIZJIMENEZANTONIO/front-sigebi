import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SatSubclasificationRoutingModule } from './sat-subclasification-routing.module';
import { SatSubclasificationListComponent } from './sat-subclasification-list/sat-subclasification-list.component';
import { SatSubclasificationDetailComponent } from './sat-subclasification-detail/sat-subclasification-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    SatSubclasificationListComponent,
    SatSubclasificationDetailComponent
  ],
  imports: [
    CommonModule,
    SatSubclasificationRoutingModule,
    AdminModule
  ]
})
export class SatSubclasificationModule { }
