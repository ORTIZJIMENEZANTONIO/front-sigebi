import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementDetailComponent } from './management-detail/management-detail.component';
import { ManagementListComponent } from './management-list/management-list.component';


@NgModule({
  declarations: [
    ManagementDetailComponent,
    ManagementListComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
