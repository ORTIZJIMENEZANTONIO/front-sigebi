import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { OfficesService } from '../../../../@core/backend/common/services/offices.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { SweetalertService } from '../../../../shared/sweetalert.service';

@Component({
  selector: 'ngx-offices-deail',
  templateUrl: './offices-deail.component.html',
  styleUrls: ['./offices-deail.component.scss']
})
export class OfficesDeailComponent extends BaseApp {

  Form: FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: OfficesService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context,
    private dom: DomSanitizer,
    private windowService: NbWindowService,
    private sweetalertService: SweetalertService) {
    super();
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";

  form = this.fb.group({
    id: [null],
    name: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(80)])],
    street: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(60)])],
    noExt: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
    noInt: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(10)])],
    colony: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(100)])],
    municipalDelegate: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(60)])],
    postalCode: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(50)])],
    rfc: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
    phone: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
    phoneTwo: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
    fax: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(20)])],
    typeOffice: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(1)])],
    noRegistration: [null, Validators.compose([Validators.pattern(""), Validators.required])],
  });

  get validateOpinion() {
    return this.form.controls;
  }
  ngOnInit(): void {
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }

  }

  register(): void {
    if (this.actionBtn == "Guardar") {
      this.service.register(this.form.value).subscribe(
        data => {
          this.sweetAlertSuccessMessage('Registrado correctamente.');
        }, err => {
          let error = '';
          if (err.status === 0) {
            error = SweetAlertConstants.noConexion;
          } else {
            error = err.message;
          }
          this.sweetAlertMessage(SweetAlertConstants.SWEET_ALERT_TITLE_OPS, error);
        }, () => {
          this.windowRef.close();
        });
    } else {
      this.service.update(this.data.id, this.form.value).subscribe(
        data => {
          this.sweetAlertSuccessMessage('Actualizado correctamente');
        }, err => {
          let error = '';
          if (err.status === 0) {
            error = SweetAlertConstants.noConexion;
          } else {
            error = err.message;
          }
          this.sweetAlertMessage(SweetAlertConstants.SWEET_ALERT_TITLE_OPS, error);
        }, () => {
          this.windowRef.close();
        });
    }
  }

  private sweetAlertMessage(title: string, message: string) {
    let sweetalert = new SweetalertModel();
    sweetalert.title = title;
    sweetalert.text = message;
    sweetalert.icon = SweetAlertConstants.SWEET_ALERT_WARNING;
    sweetalert.showConfirmButton = true;
    sweetalert.showCancelButton = false;
    this.sweetalertService.showAlertBasic(sweetalert);
  }
  private sweetAlertSuccessMessage(title: string) {
    let sweetalert = new SweetalertModel();
    sweetalert.title = title;
    sweetalert.showConfirmButton = false;
    sweetalert.showCancelButton = false;
    sweetalert.timer = SweetAlertConstants.SWEET_ALERT_TIMER_1500;
    this.sweetalertService.showAlertBasic(sweetalert);
  }
}
