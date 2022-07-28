import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeductiveListComponent } from './deductive-list/deductive-list.component';

const routes: Routes = [
  {
    path: '', component: DeductiveListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeductivesRoutingModule { }
