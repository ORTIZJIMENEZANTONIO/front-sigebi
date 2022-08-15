import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodSituacionRoutingModule } from './good-situacion-routing.module';
import { GoodSituacionListComponent } from './good-situacion-list/good-situacion-list.component';
import { GoodSituacionDetailComponent } from './good-situacion-detail/good-situacion-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    GoodSituacionListComponent,
    GoodSituacionDetailComponent
  ],
  imports: [
    CommonModule,
    GoodSituacionRoutingModule,
    AdminModule
  ]
})
export class GoodSituacionModule { }
