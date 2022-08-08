import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuingInstitutionRoutingModule } from './issuing-institution-routing.module';
import { IssuingInstitutionListComponent } from './issuing-institution-list/issuing-institution-list.component';
import { IssuingInstitutionDetailComponent } from './issuing-institution-detail/issuing-institution-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    IssuingInstitutionListComponent,
    IssuingInstitutionDetailComponent
  ],
  imports: [
    CommonModule,
    IssuingInstitutionRoutingModule,
    AdminModule
  ]
})
export class IssuingInstitutionModule { }
