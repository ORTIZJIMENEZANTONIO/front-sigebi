import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoneGeographicRoutingModule } from './zone-geographic-routing.module';
import { ZoneGeographicListComponent } from './zone-geographic-list/zone-geographic-list.component';
import { ZoneGeographicDetailComponent } from './zone-geographic-detail/zone-geographic-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    ZoneGeographicListComponent,
    ZoneGeographicDetailComponent
  ],
  imports: [
    CommonModule,
    ZoneGeographicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    CommonModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ZoneGeographicModule { }
