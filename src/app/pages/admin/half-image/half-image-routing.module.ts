import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalfImageListComponent } from './half-image-list/half-image-list.component';

const routes: Routes = [
  {
    path:'',
    component:HalfImageListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HalfImageRoutingModule { }
