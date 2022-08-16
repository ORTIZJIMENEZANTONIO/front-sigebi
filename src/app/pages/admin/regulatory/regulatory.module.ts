import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegulatoryListComponent } from './regulatory-list/regulatory-list.component';
import { RegulatoryDetailComponent } from './regulatory-detail/regulatory-detail.component';
import { RegulatoryRoutingModule } from './regulatory-routing.module'
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    RegulatoryListComponent,
    RegulatoryDetailComponent
  ],
  imports: [
    CommonModule,
    RegulatoryRoutingModule,
    AdminModule
  ]
})
export class RegulatoryModule { }
