import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormListComponent } from './norm-list/norm-list.component';

const routes: Routes = [
  {
    path: '', component: NormListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormsRoutingModule { }
