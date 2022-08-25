import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { ComponentsModule } from '../../../@components/components.module';

import { DonationApprovalRoutingModule } from './donation-approval-routing.module';
import { DonationApprovalDetailComponent } from './donation-approval-detail/donation-approval-detail.component';
import { DonationApprovalListComponent } from './donation-approval-list/donation-approval-list.component';


@NgModule({
  declarations: [
    DonationApprovalDetailComponent,
    DonationApprovalListComponent
  ],
  imports: [
    CommonModule,
    DonationApprovalRoutingModule,
    ComponentsModule
  ]
})
export class DonationApprovalModule { }
