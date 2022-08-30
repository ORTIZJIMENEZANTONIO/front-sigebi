import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AssetsRecAdminRoutingModule } from './assets-rec-admin-routing.module';
import { AssetsRecAdminDetailComponent } from './assets-rec-admin-detail/assets-rec-admin-detail.component';
import { AssetsRecAdminListComponent } from './assets-rec-admin-list/assets-rec-admin-list.component';

import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AssetsRecAdminDetailComponent,
    AssetsRecAdminListComponent
  ],
  imports: [
    CommonModule,
    AssetsRecAdminRoutingModule,
    NbAutocompleteModule, 
    NbButtonModule, 
    NbCardModule, 
    NbInputModule,
    FormsModule, 
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class AssetsRecAdminModule { }
