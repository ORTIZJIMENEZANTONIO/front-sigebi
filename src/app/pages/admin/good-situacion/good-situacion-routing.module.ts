import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodSituacionListComponent } from './good-situacion-list/good-situacion-list.component';

const routes: Routes = [
  {
    path:'',
    component:GoodSituacionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodSituacionRoutingModule { }
