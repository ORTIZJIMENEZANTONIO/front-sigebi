import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsStatusRoutingModule } from './claims-status-routing.module';
import { ClaimsStatusListComponent } from './claims-status-list/claims-status-list.component';
import { ClaimsStatusDetailComponent } from './claims-status-detail/claims-status-detail.component';


@NgModule({
  declarations: [
    ClaimsStatusListComponent,
    ClaimsStatusDetailComponent
  ],
  imports: [
    CommonModule,
    ClaimsStatusRoutingModule
  ]
})
export class ClaimsStatusModule { }
