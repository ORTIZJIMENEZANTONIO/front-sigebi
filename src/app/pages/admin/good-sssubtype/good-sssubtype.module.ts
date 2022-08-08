import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodSssubtypeRoutingModule } from './good-sssubtype-routing.module';
import { GoodSssubtypeListComponent } from './good-sssubtype-list/good-sssubtype-list.component';
import { GoodSssubtypeDetailComponent } from './good-sssubtype-detail/good-sssubtype-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    GoodSssubtypeListComponent,
    GoodSssubtypeDetailComponent
  ],
  imports: [
    CommonModule,
    GoodSssubtypeRoutingModule,
    AdminModule
  ]
})
export class GoodSssubtypeModule { }
