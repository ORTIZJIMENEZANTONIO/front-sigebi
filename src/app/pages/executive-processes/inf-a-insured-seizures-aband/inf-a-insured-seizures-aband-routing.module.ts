import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InfAInsuredSeizuresAbandListComponent } from './inf-a-insured-seizures-aband-list/inf-a-insured-seizures-aband-list.component';

const routes: Routes = [
  {
    path: '', component: InfAInsuredSeizuresAbandListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfAInsuredSeizuresAbandRoutingModule { }
