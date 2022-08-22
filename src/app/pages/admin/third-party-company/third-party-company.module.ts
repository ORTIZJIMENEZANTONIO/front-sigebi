import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdPartyCompanyRoutingModule } from './third-party-company-routing.module';
import { ThirdPartyCompanyListComponent } from './third-party-company-list/third-party-company-list.component';
import { ThirdPartyCompanyDetailComponent } from './third-party-company-detail/third-party-company-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    ThirdPartyCompanyListComponent,
    ThirdPartyCompanyDetailComponent
  ],
  imports: [
    CommonModule,
    ThirdPartyCompanyRoutingModule,
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
export class ThirdPartyCompanyModule { }
