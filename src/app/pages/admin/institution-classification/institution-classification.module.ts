import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionClassificationRoutingModule } from './institution-classification-routing.module';
import { InstitutionClassificationListComponent } from './institution-classification-list/institution-classification-list.component';
import { InstitutionClassificationDetailComponent } from './institution-classification-detail/institution-classification-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    InstitutionClassificationListComponent,
    InstitutionClassificationDetailComponent
  ],
  imports: [
    CommonModule,
    InstitutionClassificationRoutingModule,
    AdminModule
  ]
})
export class InstitutionClassificationModule { }
