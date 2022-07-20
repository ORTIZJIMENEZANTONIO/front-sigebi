import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarificationRoutingModule } from './clarification-routing.module';
import { ClarificationListComponent } from './clarification-list/clarification-list.component';
import { ClarificationDetailComponent } from './clarification-detail/clarification-detail.component';


@NgModule({
  declarations: [
    ClarificationListComponent,
    ClarificationDetailComponent
  ],
  imports: [
    CommonModule,
    ClarificationRoutingModule
  ]
})
export class ClarificationModule { }
