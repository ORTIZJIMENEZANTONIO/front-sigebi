import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodSubtypeRoutingModule } from './good-subtype-routing.module';
import { GoodSubtypeListComponent } from './good-subtype-list/good-subtype-list.component';
import { GoodSubtypeDetailComponent } from './good-subtype-detail/good-subtype-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    GoodSubtypeListComponent,
    GoodSubtypeDetailComponent
  ],
  imports: [
    CommonModule,
    GoodSubtypeRoutingModule,
    AdminModule
  ]
})
export class GoodSubtypeModule { }
