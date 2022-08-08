import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockerListComponent } from './locker-list/locker-list.component';

const routes: Routes = [
  {
    path:'',
    component:LockerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LockerRoutingModule { }
