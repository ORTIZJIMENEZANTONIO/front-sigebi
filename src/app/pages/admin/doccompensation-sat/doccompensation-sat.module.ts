import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoccompensationSatRoutingModule } from './doccompensation-sat-routing.module';
import { DoccompensationSatListComponent } from './doccompensation-sat-list/doccompensation-sat-list.component';
import { DoccompensationSatDetailComponent } from './doccompensation-sat-detail/doccompensation-sat-detail.component';


@NgModule({
  declarations: [DoccompensationSatListComponent, DoccompensationSatDetailComponent],
  imports: [
    CommonModule,
    DoccompensationSatRoutingModule
  ]
})
export class DoccompensationSatModule { }
