import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubdelegationListComponent } from './subdelegation-list/subdelegation-list.component';

const routes: Routes = [
  {
    path:'',
    component:SubdelegationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubdelegationRoutingModule { }
