import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HalfImageRoutingModule } from './half-image-routing.module';
import { HalfImageListComponent } from './half-image-list/half-image-list.component';
import { HalfImageDetailComponent } from './half-image-detail/half-image-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    HalfImageListComponent,
    HalfImageDetailComponent
  ],
  imports: [
    CommonModule,
    HalfImageRoutingModule,
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
export class HalfImageModule { }
