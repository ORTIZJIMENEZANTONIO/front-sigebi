import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawerListComponent } from './drawer-list/drawer-list.component';

const routes: Routes = [
  {
    path:'', component:DrawerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrawersRoutingModule { }
