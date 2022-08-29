import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { ReDocsXSERARoutingModule } from './re-docs-x-sera-routing.module';
import { ReDocsXSeraDetailComponent } from './re-docs-x-sera-detail/re-docs-x-sera-detail.component';
import { ReDocsXSeraListComponent } from './re-docs-x-sera-list/re-docs-x-sera-list.component';


@NgModule({
  declarations: [
    ReDocsXSeraDetailComponent,
    ReDocsXSeraListComponent
  ],
  imports: [
    CommonModule,
    ReDocsXSERARoutingModule,
    ComponentsModule
  ]
})
export class ReDocsXSERAModule { }
