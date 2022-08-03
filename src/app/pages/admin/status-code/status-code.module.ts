import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusCodeRoutingModule } from './status-code-routing.module';
import { StatusCodeListComponent } from './status-code-list/status-code-list.component';
import { StatusCodeDetailComponent } from './status-code-detail/status-code-detail.component';


@NgModule({
  declarations: [
    StatusCodeListComponent,
    StatusCodeDetailComponent
  ],
  imports: [
    CommonModule,
    StatusCodeRoutingModule
  ]
})
export class StatusCodeModule { }
