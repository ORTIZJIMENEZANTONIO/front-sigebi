import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HalfImageRoutingModule } from './half-image-routing.module';
import { HalfImageListComponent } from './half-image-list/half-image-list.component';
import { HalfImageDetailComponent } from './half-image-detail/half-image-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    HalfImageListComponent,
    HalfImageDetailComponent
  ],
  imports: [
    CommonModule,
    HalfImageRoutingModule,
    AdminModule
  ]
})
export class HalfImageModule { }
