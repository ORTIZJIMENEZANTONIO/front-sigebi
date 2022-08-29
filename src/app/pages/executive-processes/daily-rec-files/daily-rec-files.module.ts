import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../@components/components.module';

import { DailyRecFilesRoutingModule } from './daily-rec-files-routing.module';
import { DailyRecFilesDetailComponent } from './daily-rec-files-detail/daily-rec-files-detail.component';
import { DailyRecFilesListComponent } from './daily-rec-files-list/daily-rec-files-list.component';


@NgModule({
  declarations: [
    DailyRecFilesDetailComponent,
    DailyRecFilesListComponent
  ],
  imports: [
    CommonModule,
    DailyRecFilesRoutingModule,
    ComponentsModule
  ]
})
export class DailyRecFilesModule { }
