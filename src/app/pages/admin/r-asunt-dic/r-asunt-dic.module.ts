import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RAsuntDicRoutingModule } from './r-asunt-dic-routing.module';
import { RAsuntDicListComponent } from './r-asunt-dic-list/r-asunt-dic-list.component';
import { RAsuntDicDetailComponent } from './r-asunt-dic-detail/r-asunt-dic-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NbCardModule, NbSelectModule, NbButtonModule, NbInputModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
  declarations: [
    RAsuntDicListComponent,
    RAsuntDicDetailComponent
  ],
  imports: [
    CommonModule,
    RAsuntDicRoutingModule,
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
export class RAsuntDicModule { }
