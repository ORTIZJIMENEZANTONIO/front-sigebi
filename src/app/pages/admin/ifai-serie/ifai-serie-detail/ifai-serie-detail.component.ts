import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';



@Component({
  selector: 'ngx-ifai-serie-detail',
  templateUrl: './ifai-serie-detail.component.html',
  styleUrls: ['./ifai-serie-detail.component.scss']
})
export class IfaiSerieDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
