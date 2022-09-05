import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentifierListComponent } from './identifier-list/identifier-list.component';

const routes: Routes = [{
  path:'',
  component:IdentifierListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentifierRoutingModule { }