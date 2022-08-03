import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneralStatusListComponent } from './general-status-list/general-status-list.component';

const routes: Routes = [
  {
    path: '', component: GeneralStatusListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralStatusRoutingModule { }
