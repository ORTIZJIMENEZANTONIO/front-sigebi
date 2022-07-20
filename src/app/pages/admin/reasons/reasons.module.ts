// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { ReasonsRoutingModule, routedComponents } from './reasons-routing.module';
// import { NonDeliveryReasonsDetailComponent } from './non-delivery-reasons-detail/non-delivery-reasons-detail.component';
// import { NonDeliveryReasonsListComponent } from './non-delivery-reasons-list/non-delivery-reasons-list.component';
// import { ReasonsComponent } from './reasons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbSelectModule, NbInputModule, NbWindowModule} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ReasonsRoutingModule, routedComponents } from './reasons-routing.module';
import { NonDeliveryReasonsDetailComponent } from './non-delivery-reasons-detail/non-delivery-reasons-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NonDeliveryReasonsListComponent } from './non-delivery-reasons-list/non-delivery-reasons-list.component';


@NgModule({
  declarations: [...routedComponents, NonDeliveryReasonsDetailComponent],
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
    ReasonsRoutingModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class ReasonsModule { }
