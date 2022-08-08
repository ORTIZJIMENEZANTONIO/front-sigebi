import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericListComponent } from './generic-list/generic-list.component';

const routes: Routes = [
  {
    path: '', component: GenericListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenericsRoutingModule { }
