import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { DeductiveVerificationRoutingModule } from './deductive-verification-routing.module';
import { DeductiveVerificationListComponent } from './deductive-verification-list/deductive-verification-list.component';
import { DeductiveVerificationDetailComponent } from './deductive-verification-detail/deductive-verification-detail.component';

@NgModule({
  declarations: [
    DeductiveVerificationListComponent,
    DeductiveVerificationDetailComponent
  ],
  imports: [
    CommonModule,
    DeductiveVerificationRoutingModule,
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
export class DeductiveVerificationModule { }
