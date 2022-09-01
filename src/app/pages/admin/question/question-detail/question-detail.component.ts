import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { QuestionInterface } from '../../../../@core/interfaces/auction/question.model';
import { QuestionService } from '../../../../@core/backend/common/services/question.service';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';



@Component({
  selector: 'ngx-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent extends BasePage {

  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: QuestionService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context
  ) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm(): void {
    this.form = this.fb.group({

      id:[''],
      text: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      type: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      maximumScore: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      registerNumber: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      
    });
  
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get text() { return this.form.get('text'); }
  public get type() { return this.form.get('type'); }
  public get maximumScore() { return this.form.get('maximumScore'); }
  public get registerNumber() { return this.form.get('registerNumber'); }

  
  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
        this.onLoadFailed('success', 'Preguntas', 'Registrado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }
  private updateRegister(data): void {
    delete data.id;
    this.service.update(this.data.id, data).subscribe(
      data => {
        this.onLoadFailed('success', 'Preguntas', 'Actualizado Correctamente');
      }, err => {
        let error = '';
        if (err.status === 0) {
          error = SweetAlertConstants.noConexion;
        } else {
          error = err.message;
        }
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }
}