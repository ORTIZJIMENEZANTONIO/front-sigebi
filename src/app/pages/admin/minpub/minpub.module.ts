import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinpubRoutingModule } from './minpub-routing.module';
import { MinpubListComponent } from './minpub-list/minpub-list.component';
import { MinpubDetailComponent } from './minpub-detail/minpub-detail.component';
import { AdminModule } from '../admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    MinpubListComponent,
    MinpubDetailComponent
  ],
  imports: [
    CommonModule,
    MinpubRoutingModule,
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
export class MinpubModule { }
