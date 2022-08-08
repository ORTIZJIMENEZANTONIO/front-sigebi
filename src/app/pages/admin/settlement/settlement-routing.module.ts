import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettlementListComponent } from './settlement-list/settlement-list.component';

const routes: Routes = [
  {
    path: '', component: SettlementListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettlementRoutingModule { }
