import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import {RAsuntDicDetailComponent} from '../r-asunt-dic-detail/r-asunt-dic-detail.component';
import { RAuntDicService} from '../../../../@core/backend/common/services/r-asunt-dic.service';
import { RAsuntDicModel} from '../../../../@core/interfaces/auction/r-asunt-dic.model'

import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-r-asunt-dic-list',
  templateUrl: './r-asunt-dic-list.component.html',
  styleUrls: ['./r-asunt-dic-list.component.scss']
})
export class RAsuntDicListComponent extends BasePage {

  

}
