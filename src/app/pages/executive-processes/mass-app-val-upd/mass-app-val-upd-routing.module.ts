import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MassAppValUpdListComponent } from './mass-app-val-upd-list/mass-app-val-upd-list.component';

const routes: Routes = [
  {
    path: '', component: MassAppValUpdListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassAppValUpdRoutingModule { }
