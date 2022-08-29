import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsRecAdminRoutingModule } from './assets-rec-admin-routing.module';
import { AssetsRecAdminDetailComponent } from './assets-rec-admin-detail/assets-rec-admin-detail.component';
import { AssetsRecAdminListComponent } from './assets-rec-admin-list/assets-rec-admin-list.component';


@NgModule({
  declarations: [
    AssetsRecAdminDetailComponent,
    AssetsRecAdminListComponent
  ],
  imports: [
    CommonModule,
    AssetsRecAdminRoutingModule
  ]
})
export class AssetsRecAdminModule { }
