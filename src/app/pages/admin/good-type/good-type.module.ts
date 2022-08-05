import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodTypeRoutingModule } from './good-type-routing.module';
import { GoodTypeListComponent } from './good-type-list/good-type-list.component';
import { GoodTypeDetailComponent } from './good-type-detail/good-type-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    GoodTypeListComponent,
    GoodTypeDetailComponent
  ],
  imports: [
    CommonModule,
    GoodTypeRoutingModule,
    AdminModule
  ]
})
export class GoodTypeModule { }
