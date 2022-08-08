import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartamentRoutingModule } from './departament-routing.module';
import { DepartamentListComponent } from './departament-list/departament-list.component';
import { DepartamentDetailComponent } from './departament-detail/departament-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    DepartamentListComponent,
    DepartamentDetailComponent
  ],
  imports: [
    CommonModule,
    DepartamentRoutingModule,
    AdminModule
  ]
})
export class DepartamentModule { }
