import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevisionReasonRoutingModule } from './revision-reason-routing.module';
import { RevisionReasonListComponent } from './revision-reason-list/revision-reason-list.component';
import { RevisionReasonDetailComponent } from './revision-reason-detail/revision-reason-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    RevisionReasonListComponent,
    RevisionReasonDetailComponent
  ],
  imports: [
    CommonModule,
    RevisionReasonRoutingModule,
    AdminModule
  ]
})
export class RevisionReasonModule { }
