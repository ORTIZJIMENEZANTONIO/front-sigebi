import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DonationApprovalListComponent } from './donation-approval-list/donation-approval-list.component';

const routes: Routes = [
  {
    path: '', component: DonationApprovalListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationApprovalRoutingModule { }
