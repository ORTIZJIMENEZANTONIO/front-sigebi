import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZipCodeListComponent } from './zip-code-list/zip-code-list.component';

const routes: Routes = [
  {
    path: '', component: ZipCodeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZipCodeRoutingModule { }
