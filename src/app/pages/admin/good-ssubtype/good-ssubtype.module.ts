import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodSsubtypeRoutingModule } from './good-ssubtype-routing.module';
import { GoodSsubtypeListComponent } from './good-ssubtype-list/good-ssubtype-list.component';
import { GoodSsubtypeDetailComponent } from './good-ssubtype-detail/good-ssubtype-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    GoodSsubtypeListComponent,
    GoodSsubtypeDetailComponent
  ],
  imports: [
    CommonModule,
    GoodSsubtypeRoutingModule,
    AdminModule
  ]
})
export class GoodSsubtypeModule { }
