import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProficientListComponent } from './proficient-list/proficient-list.component';

const routes: Routes = [
  {
    path:'',
    component:ProficientListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProficientRoutingModule { }
