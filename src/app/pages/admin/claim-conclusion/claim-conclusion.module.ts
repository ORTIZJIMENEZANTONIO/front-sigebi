import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimConclusionRoutingModule } from './claim-conclusion-routing.module';
import { ClaimConclusionListComponent } from './claim-conclusion-list/claim-conclusion-list.component';
import { ClaimConclusionDetailComponent } from './claim-conclusion-detail/claim-conclusion-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    ClaimConclusionListComponent,
    ClaimConclusionDetailComponent
  ],
  imports: [
    CommonModule,
    ClaimConclusionRoutingModule,
    AdminModule
  ]
})
export class ClaimConclusionModule { }
