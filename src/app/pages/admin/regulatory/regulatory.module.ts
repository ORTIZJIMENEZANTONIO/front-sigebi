import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegulatoryListComponent } from './regulatory-list/regulatory-list.component';
import { RegulatoryDetailComponent } from './regulatory-detail/regulatory-detail.component';
import { RegulatoryRoutingModule } from './regulatory-routing.module'
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    RegulatoryListComponent,
    RegulatoryDetailComponent
  ],
  imports: [
    CommonModule,
    RegulatoryRoutingModule,
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
export class RegulatoryModule { }
