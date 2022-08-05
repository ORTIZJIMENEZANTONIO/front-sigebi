import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {NbAutocompleteModule,  NbButtonModule, NbCardModule, NbSelectModule, NbInputModule, NbWindowModule} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { FractionsRoutingModule } from './fractions-routing.module';
import { FractionsDetailComponent } from './fractions-detail/fractions-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FractionsListComponent } from './fractions-list/fractions-list.component';


@NgModule({
  declarations: [
    FractionsListComponent,
    FractionsDetailComponent
  ],
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
    FractionsRoutingModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    NbAutocompleteModule
  ]
})
export class FractionsModule { }
