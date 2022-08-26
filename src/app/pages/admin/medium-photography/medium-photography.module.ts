import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediumPhotographyRoutingModule } from './medium-photography-routing.module';
import { MediumPhotographyListComponent } from './medium-photography-list/medium-photography-list.component';
import { MediumPhotographyDetailComponent } from './medium-photography-detail/medium-photography-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    MediumPhotographyListComponent,
    MediumPhotographyDetailComponent
  ],
  imports: [
    CommonModule,
    MediumPhotographyRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule
  ]
})
export class MediumPhotographyModule { }
