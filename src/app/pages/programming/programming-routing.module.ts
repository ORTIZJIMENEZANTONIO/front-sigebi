import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgrammingComponent } from './programming.component';
import { GoodsScheduleComponent } from './goods-schedule/goods-schedule.component';

const routes: Routes = [{
  path: '',
  component: ProgrammingComponent,
  children: [
    {
      path: 'good-schedule',
      component: GoodsScheduleComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammingRoutingModule { }

export const routedComponents = [
  ProgrammingComponent,
  GoodsScheduleComponent,
];