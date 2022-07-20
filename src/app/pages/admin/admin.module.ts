import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
// import { OfficialLegendsListComponent } from './legends/official-legends-list/official-legends-list.component';
// import { ParagraphsComponent } from './paragraphs/paragraphs.component';
//import { GoodsModule } from './goods/goods.module';
//import { UserModule } from './user/user.module';
//import { AdminComponent } from './admin.component';


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
    //GoodsModule,
    //CatalogsModule,
    //UserModule
  ]
})
export class AdminModule { }
