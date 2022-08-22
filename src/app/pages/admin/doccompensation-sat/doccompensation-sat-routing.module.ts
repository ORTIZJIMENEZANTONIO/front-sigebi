import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoccompensationSatListComponent } from './doccompensation-sat-list/doccompensation-sat-list.component';

const routes: Routes = [
  {
    path: '',component: DoccompensationSatListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoccompensationSatRoutingModule { }
