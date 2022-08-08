import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbSelectModule, NbInputModule, NbWindowModule} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogsRoutingModule, routedComponents } from './catalogs-routing.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ComponentsModule } from '../../../@components/components.module';
//import { CategoryListComponent } from './category-list/category-list.component';
//import {CatalogsComponent } from './catalogs.component';

@NgModule({
  declarations: [
    ...routedComponents,
    CategoryDetailComponent
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
    CatalogsRoutingModule,    
  ]
})
export class CatalogsModule { }
