import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DailyRecFilesListComponent } from './daily-rec-files-list/daily-rec-files-list.component';

const routes: Routes = [{
  path: '', component: DailyRecFilesListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyRecFilesRoutingModule { }
