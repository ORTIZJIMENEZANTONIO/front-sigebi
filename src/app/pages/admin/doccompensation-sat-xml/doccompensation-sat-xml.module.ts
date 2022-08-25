import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoccompensationSatXmlRoutingModule } from './doccompensation-sat-xml-routing.module';
import { DoccompensationSatXmlListComponent } from './doccompensation-sat-xml-list/doccompensation-sat-xml-list.component';
import { DoccompensationSatXmlDetailComponent } from './doccompensation-sat-xml-detail/doccompensation-sat-xml-detail.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [DoccompensationSatXmlListComponent, DoccompensationSatXmlDetailComponent],
  imports: [
    CommonModule,
    DoccompensationSatXmlRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
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
export class DoccompensationSatXmlModule { }
