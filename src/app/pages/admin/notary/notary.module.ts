import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotaryRoutingModule } from './notary-routing.module';
import { NotaryListComponent } from './notary-list/notary-list.component';
import { NotaryDetailComponent } from './notary-detail/notary-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    NotaryListComponent,
    NotaryDetailComponent
  ],
  imports: [
    CommonModule,
    NotaryRoutingModule,
    AdminModule
  ]
})
export class NotaryModule { }
