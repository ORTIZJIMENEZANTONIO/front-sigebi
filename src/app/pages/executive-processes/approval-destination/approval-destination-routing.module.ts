import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApprovalDestinationListComponent } from './approval-destination-list/approval-destination-list.component';

const routes: Routes = [
  {
    path: '', component: ApprovalDestinationListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalDestinationRoutingModule { }
