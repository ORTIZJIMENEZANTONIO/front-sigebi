import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SatSubclasificationListComponent } from './sat-subclasification-list/sat-subclasification-list.component';

const routes: Routes = [
  { path: '', component: SatSubclasificationListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SatSubclasificationRoutingModule { }
