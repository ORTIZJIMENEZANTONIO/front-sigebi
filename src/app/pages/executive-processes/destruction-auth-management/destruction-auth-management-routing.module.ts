import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestructionAuthManagementListComponent } from './destruction-auth-management-list/destruction-auth-management-list.component';

const routes: Routes = [
  {
    path: '', component: DestructionAuthManagementListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestructionAuthManagementRoutingModule { }
