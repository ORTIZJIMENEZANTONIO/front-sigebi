import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodSubtypeListComponent } from './good-subtype-list/good-subtype-list.component';
const routes: Routes = [
  {
    path:'',
    component:GoodSubtypeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodSubtypeRoutingModule { }
