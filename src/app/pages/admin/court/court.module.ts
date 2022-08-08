import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourtRoutingModule } from './court-routing.module';
import { CourtListComponent } from './court-list/court-list.component';
import { CourtDetailComponent } from './court-detail/court-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    CourtListComponent,
    CourtDetailComponent
  ],
  imports: [
    CommonModule,
    CourtRoutingModule,
    AdminModule
  ]
})
export class CourtModule { }
