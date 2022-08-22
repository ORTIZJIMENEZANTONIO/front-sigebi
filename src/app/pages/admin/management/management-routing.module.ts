import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementListComponent } from './management-list/management-list.component';

const routes: Routes = [
  {
    path:'',component:ManagementListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
