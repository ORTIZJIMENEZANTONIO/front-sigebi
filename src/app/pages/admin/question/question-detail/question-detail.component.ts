import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { BaseApp } from '../../../../@core/shared/base-app';
import { QuestionService } from '../../../../@core/backend/common/services/question.service';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';


@Component({
  selector: 'ngx-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent extends BaseApp {

  Form: FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: QuestionService,
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

      id:[null],
      text: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      type: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      maximumScore: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      registerNumber: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      
    });
  
    get validateQuestion() {
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
  