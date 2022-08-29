import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelvesListComponent } from './shelves-list/shelves-list.component';

const routes: Routes = [
  {
    path:'', component:ShelvesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelvesRoutingModule { }
