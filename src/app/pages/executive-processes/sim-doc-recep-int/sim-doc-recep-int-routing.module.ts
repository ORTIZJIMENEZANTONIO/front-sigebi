import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimDocRecepIntListComponent } from './sim-doc-recep-int-list/sim-doc-recep-int-list.component';

const routes: Routes = [
  {
    path: '' , component: SimDocRecepIntListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimDocRecepIntRoutingModule { }
