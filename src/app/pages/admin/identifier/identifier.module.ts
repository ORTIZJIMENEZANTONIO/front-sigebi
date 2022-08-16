import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentifierRoutingModule } from './identifier-routing.module';
import { IdentifierListComponent } from './identifier-list/identifier-list.component';
import { IdentifierDetailComponent } from './identifier-detail/identifier-detail.component';
import { AdminModule } from '../admin.module';

@NgModule({
  declarations: [
    IdentifierListComponent,
    IdentifierDetailComponent
  ],
  imports: [
    CommonModule,
    IdentifierRoutingModule,
    AdminModule
  ]
})
export class IdentifierModule { }
