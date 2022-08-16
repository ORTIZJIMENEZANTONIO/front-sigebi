// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { StatusCodeRoutingModule } from './status-code-routing.module';
// import { StatusCodeListComponent } from './status-code-list/status-code-list.component';
// import { StatusCodeDetailComponent } from './status-code-detail/status-code-detail.component';


// @NgModule({
//   declarations: [
//     StatusCodeListComponent,
//     StatusCodeDetailComponent
//   ],
//   imports: [
//     CommonModule,
//     StatusCodeRoutingModule
//   ]
// })
// export class StatusCodeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbSelectModule, NbInputModule, NbWindowModule} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { StatusCodeRoutingModule } from './status-code-routing.module';
import { StatusCodeDetailComponent } from './status-code-detail/status-code-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StatusCodeListComponent } from './status-code-list/status-code-list.component';
@NgModule({
  declarations: [
    StatusCodeDetailComponent,
    StatusCodeListComponent
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
    StatusCodeRoutingModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class StatusCodeModule { }
