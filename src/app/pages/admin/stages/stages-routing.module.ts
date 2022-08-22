import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagesListComponent } from './stages-list/stages-list.component';

const routes: Routes = [
  {
    path: '',component: StagesListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagesRoutingModule { }
