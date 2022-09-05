import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsStatusListComponent } from './claims-status-list/claims-status-list.component';

const routes: Routes = [
  {
    path:'',component:ClaimsStatusListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsStatusRoutingModule { }
