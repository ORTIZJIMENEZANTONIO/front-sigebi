import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsRecAdminListComponent } from './assets-rec-admin-list/assets-rec-admin-list.component';

const routes: Routes = [{
  path: '', component: AssetsRecAdminListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetsRecAdminRoutingModule { }
