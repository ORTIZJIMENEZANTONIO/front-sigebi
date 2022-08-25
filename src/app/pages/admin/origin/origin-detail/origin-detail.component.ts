import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { BaseApp } from '../../../../@core/shared/base-app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { OriginService  } from '../../../../@core/backend/common/services/origin.service';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';

@Component({
  selector: 'ngx-origin-detail',
  templateUrl: './origin-detail.component.html',
  styleUrls: ['./origin-detail.component.scss']
})
export class OriginDetailComponent extends BaseApp {

  Form: FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: OriginService,
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
      idTransferer: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      keyTransferer: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      description: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      type: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      address: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      city: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,255}")])],
      idCity: [null, Validators.compose([Validators.pattern("[0-9]{1,255}"),Validators.required])],
      keyEntityFederative: [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,15}")])],
    });


   get validate() {
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
