// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { BatchRoutingModule } from './batch-routing.module';
// import { BatchListComponent } from './batch-list/batch-list.component';
// import { BatchDetailComponent } from './batch-detail/batch-detail.component';


// @NgModule({
//   declarations: [
//     BatchListComponent,
//     BatchDetailComponent
//   ],
//   imports: [
//     CommonModule,
//     BatchRoutingModule
//   ]
// })
// export class BatchModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbSelectModule, NbInputModule, NbWindowModule} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { BatchRoutingModule } from './batch-routing.module';
import { BatchDetailComponent } from './batch-detail/batch-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BatchListComponent } from './batch-list/batch-list.component';
@NgModule({
  declarations: [
    BatchDetailComponent,
    BatchListComponent
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
    BatchRoutingModule,
    MatPaginatorModule,
  ]
})
export class BatchModule { }
