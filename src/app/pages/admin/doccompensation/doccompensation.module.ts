import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoccompensationRoutingModule } from './doccompensation-routing.module';
import { DoccompensationDetailComponent } from './doccompensation-detail/doccompensation-detail.component';
import { DoccompensationListComponent } from './doccompensation-list/doccompensation-list.component';


@NgModule({
  declarations: [DoccompensationDetailComponent, DoccompensationListComponent],
  imports: [
    CommonModule,
    DoccompensationRoutingModule
  ]
})
export class DoccompensationModule { }
