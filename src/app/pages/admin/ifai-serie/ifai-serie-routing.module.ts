import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IfaiSerieListComponent } from './ifai-serie-list/ifai-serie-list.component';

const routes: Routes = [
  { path: '', component: IfaiSerieListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IfaiSerieRoutingModule { }
