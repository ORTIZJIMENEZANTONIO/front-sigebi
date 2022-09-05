import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpinionListComponent } from './opinion-list/opinion-list.component';

const routes: Routes = [{
  path:'',
  component:OpinionListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpinionRoutingModule { }
