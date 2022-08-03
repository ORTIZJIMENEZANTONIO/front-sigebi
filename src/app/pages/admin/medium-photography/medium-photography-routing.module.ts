import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediumPhotographyListComponent } from './medium-photography-list/medium-photography-list.component';

const routes: Routes = [
  {
    path:'',
    component:MediumPhotographyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediumPhotographyRoutingModule { }
