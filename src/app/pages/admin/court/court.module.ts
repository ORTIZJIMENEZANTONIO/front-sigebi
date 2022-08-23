import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourtRoutingModule } from './court-routing.module';
import { CourtListComponent } from './court-list/court-list.component';
import { CourtDetailComponent } from './court-detail/court-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { ComponentsModule } from '../../../@components/components.module';


@NgModule({
  declarations: [
    CourtListComponent,
    CourtDetailComponent
  ],
  imports: [
    CommonModule,
    CourtRoutingModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    Ng2SmartTableModule,
    ThemeModule,
    ComponentsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class CourtModule { }
