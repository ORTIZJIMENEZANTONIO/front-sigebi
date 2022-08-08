import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SateListComponent } from './sate-list/sate-list.component';

const routes: Routes = [
  {
    path: '', component: SateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateOfRepublicRoutingModule { }
