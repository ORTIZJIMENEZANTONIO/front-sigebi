import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { ApprovalDestinationRoutingModule } from './approval-destination-routing.module';
import { ApprovalDestinationDetailComponent } from './approval-destination-detail/approval-destination-detail.component';
import { ApprovalDestinationListComponent } from './approval-destination-list/approval-destination-list.component';


@NgModule({
  declarations: [
    ApprovalDestinationDetailComponent,
    ApprovalDestinationListComponent
  ],
  imports: [
    CommonModule,
    ApprovalDestinationRoutingModule,
    ComponentsModule
  ]
})
export class ApprovalDestinationModule { }
