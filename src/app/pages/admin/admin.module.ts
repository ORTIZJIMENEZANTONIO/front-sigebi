import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
// import { OfficialLegendsListComponent } from './legends/official-legends-list/official-legends-list.component';
// import { ParagraphsComponent } from './paragraphs/paragraphs.component';
//import { GoodsModule } from './goods/goods.module';
//import { UserModule } from './user/user.module';
//import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from '../../@components/components.module';


@NgModule({
  declarations: [
    //AdminComponent
    ...routedComponents,
    
    // ParagraphsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
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
    //GoodsModule,
    //CatalogsModule,
    //UserModule
  ],
  exports: [
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AdminModule { }
