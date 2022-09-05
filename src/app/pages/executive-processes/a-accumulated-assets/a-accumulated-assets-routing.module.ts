import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AAccumulatedAssetsListComponent } from './a-accumulated-assets-list/a-accumulated-assets-list.component';

const routes: Routes = [
  {
    path: '', component: AAccumulatedAssetsListComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AAccumulatedAssetsRoutingModule { }
