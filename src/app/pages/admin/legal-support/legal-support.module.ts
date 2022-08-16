import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalSupportRoutingModule } from './legal-support-routing.module';
import { LegalSupportListComponent } from './legal-support-list/legal-support-list.component';
import { LegalSupportDetailComponent } from './legal-support-detail/legal-support-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    LegalSupportListComponent,
    LegalSupportDetailComponent
  ],
  imports: [
    CommonModule,
    LegalSupportRoutingModule,
    AdminModule
  ]
})
export class LegalSupportModule { }
