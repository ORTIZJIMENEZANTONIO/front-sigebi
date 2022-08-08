import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchDetailComponent } from './batch-detail/batch-detail.component';


@NgModule({
  declarations: [
    BatchListComponent,
    BatchDetailComponent
  ],
  imports: [
    CommonModule,
    BatchRoutingModule
  ]
})
export class BatchModule { }
