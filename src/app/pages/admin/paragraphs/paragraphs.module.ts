import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbSelectModule, NbInputModule, NbWindowModule} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ParagraphsRoutingModule, routedComponents } from './paragraphs-routing.module';
import { ParagraphsDetailComponent } from './paragraphs-detail/paragraphs-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ParagraphsListComponent } from './paragraphs-list/paragraphs-list.component';




@NgModule({
  declarations: [...routedComponents, ParagraphsDetailComponent],
  imports: [
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
    ParagraphsRoutingModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ParagraphsModule { }
