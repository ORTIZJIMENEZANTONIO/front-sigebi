import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SatsaeClassificationRoutingModule } from './satsae-classification-routing.module';
import { SatsaeClassificationListComponent } from './satsae-classification-list/satsae-classification-list.component';
import { SatsaeClassificationDetailComponent } from './satsae-classification-detail/satsae-classification-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    SatsaeClassificationListComponent,
    SatsaeClassificationDetailComponent
  ],
  imports: [
    CommonModule,
    SatsaeClassificationRoutingModule,
    AdminModule
  ]
})
export class SatsaeClassificationModule { }
