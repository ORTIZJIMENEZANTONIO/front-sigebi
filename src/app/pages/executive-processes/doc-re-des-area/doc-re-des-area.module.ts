import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocReDesAreaRoutingModule } from './doc-re-des-area-routing.module';
import { DocReDesAreaDetailComponent } from './doc-re-des-area-detail/doc-re-des-area-detail.component';
import { DocReDesAreaListComponent } from './doc-re-des-area-list/doc-re-des-area-list.component';


@NgModule({
  declarations: [
    DocReDesAreaDetailComponent,
    DocReDesAreaListComponent
  ],
  imports: [
    CommonModule,
    DocReDesAreaRoutingModule
  ]
})
export class DocReDesAreaModule { }
