import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediumPhotographyRoutingModule } from './medium-photography-routing.module';
import { MediumPhotographyListComponent } from './medium-photography-list/medium-photography-list.component';
import { MediumPhotographyDetailComponent } from './medium-photography-detail/medium-photography-detail.component';
import { AdminModule } from '../admin.module';


@NgModule({
  declarations: [
    MediumPhotographyListComponent,
    MediumPhotographyDetailComponent
  ],
  imports: [
    CommonModule,
    MediumPhotographyRoutingModule,
    AdminModule
  ]
})
export class MediumPhotographyModule { }
