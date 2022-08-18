import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoccompensationSatXmlRoutingModule } from './doccompensation-sat-xml-routing.module';
import { DoccompensationSatXmlListComponent } from './doccompensation-sat-xml-list/doccompensation-sat-xml-list.component';
import { DoccompensationSatXmlDetailComponent } from './doccompensation-sat-xml-detail/doccompensation-sat-xml-detail.component';


@NgModule({
  declarations: [DoccompensationSatXmlListComponent, DoccompensationSatXmlDetailComponent],
  imports: [
    CommonModule,
    DoccompensationSatXmlRoutingModule
  ]
})
export class DoccompensationSatXmlModule { }
