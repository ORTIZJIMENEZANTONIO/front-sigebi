import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModule } from '../../admin.module';
import { SatClassificationListComponent } from './sat-classification-list/sat-classification-list.component';
import { SatClassificationDetailComponent } from './sat-classification-detail/sat-classification-detail.component';
import { SatClassificacionRoutingModule } from './sat-classificacion-routing.module';


@NgModule({
  declarations: [
    SatClassificationListComponent,
    SatClassificationDetailComponent
  ],
  imports: [
    CommonModule,
    SatClassificacionRoutingModule,
    AdminModule
  ]
})
export class SatClassificacionModule { }
