import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SafeListComponent } from './safe-list/safe-list.component';

const routes: Routes = [
  {
    path: '', component: SafeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafeRoutingModule { }
