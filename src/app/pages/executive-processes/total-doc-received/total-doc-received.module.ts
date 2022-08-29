import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { TotalDocReceivedRoutingModule } from './total-doc-received-routing.module';
import { TotalDocReceivedDetailComponent } from './total-doc-received-detail/total-doc-received-detail.component';
import { TotalDocReceivedListComponent } from './total-doc-received-list/total-doc-received-list.component';


@NgModule({
  declarations: [
    TotalDocReceivedDetailComponent,
    TotalDocReceivedListComponent,
  ],
  imports: [
    CommonModule,
    TotalDocReceivedRoutingModule,
    ComponentsModule
  ]
})
export class TotalDocReceivedModule { }
