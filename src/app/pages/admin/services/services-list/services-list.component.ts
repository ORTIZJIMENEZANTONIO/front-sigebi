import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService } from '@nebular/theme';
import { SweetAlertResult } from 'sweetalert2';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';

import { ServicesDetailComponent } from '../services-detail/services-detail.component';
import { ServiceCatService } from '../../../../@core/backend/common/services/serviceCat.service';
import { ServiceCatInterface } from '../../../../@core/interfaces/auction/service.model';

@Component({
  selector: 'ngx-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent extends BasePage implements OnInit {


}
