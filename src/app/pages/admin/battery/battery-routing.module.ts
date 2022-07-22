import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatteryListComponent } from './battery-list/battery-list.component';

const routes: Routes = [
  {
    path: '',
    component: BatteryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatteryRoutingModule { }
