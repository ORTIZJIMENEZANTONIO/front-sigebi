import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiciadosListComponent } from './indiciados-list/indiciados-list.component';

const routes: Routes = [{
  path:'',
  component:IndiciadosListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiciadosRoutingModule { }
