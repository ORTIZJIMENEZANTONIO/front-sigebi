import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReDocsXSeraListComponent } from './re-docs-x-sera-list/re-docs-x-sera-list.component';

const routes: Routes = [
  {
    path: '', component: ReDocsXSeraListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReDocsXSERARoutingModule { }
