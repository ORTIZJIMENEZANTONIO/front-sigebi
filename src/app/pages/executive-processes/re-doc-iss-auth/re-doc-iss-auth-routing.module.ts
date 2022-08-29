import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReDocIssAuthListComponent } from './re-doc-iss-auth-list/re-doc-iss-auth-list.component';

const routes: Routes = [{
  path: '', component: ReDocIssAuthListComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReDocIssAuthRoutingModule { }
