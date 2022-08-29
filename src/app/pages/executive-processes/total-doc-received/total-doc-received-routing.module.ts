import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TotalDocReceivedListComponent } from './total-doc-received-list/total-doc-received-list.component';

const routes: Routes = [
  {
    path: '', component: TotalDocReceivedListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotalDocReceivedRoutingModule { }
