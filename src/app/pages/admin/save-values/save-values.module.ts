import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaveValuesRoutingModule } from './save-values-routing.module';
import { SaveValuesListComponent } from './save-values-list/save-values-list.component';
import { SaveValuesDetailComponent } from './save-values-detail/save-values-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    SaveValuesListComponent,
    SaveValuesDetailComponent
  ],
  imports: [
    CommonModule,
    SaveValuesRoutingModule,
    AdminModule
  ]
})
export class SaveValuesModule { }
