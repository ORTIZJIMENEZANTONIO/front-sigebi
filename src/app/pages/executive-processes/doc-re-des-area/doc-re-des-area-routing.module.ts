import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocReDesAreaListComponent } from './doc-re-des-area-list/doc-re-des-area-list.component';

const routes: Routes = [
  {
    path: '', component: DocReDesAreaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocReDesAreaRoutingModule { }
