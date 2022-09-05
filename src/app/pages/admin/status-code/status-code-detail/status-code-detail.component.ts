import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

import { STRING_PATTERN } from '../../../../@components/constants';
import { NUMBERS_PATTERN } from '../../../../@components/constants';
import { StatusCodeService } from '../../../../@core/backend/common/services/status-code.service';
import { StatusCode as StatusCodeInterface  } from '../../../../@core/interfaces/auction/status-code.model';

@Component({
  selector: 'ngx-status-code-detail',
  templateUrl: './status-code-detail.component.html',
  styleUrls: ['./status-code-detail.component.scss']
})
export class StatusCodeDetailComponent extends BasePage implements OnInit {
  
  public form: FormGroup;
  private data: StatusCodeInterface;
  public actionBtn: string = "Guardar";

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context, 
    private service: StatusCodeService,
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService
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
      id: [null, Validators.compose([ Validators.required , Validators.minLength(1), Validators.maxLength(5), Validators.pattern(STRING_PATTERN) ])],
      descCode: [null, Validators.compose([ Validators.minLength(1), Validators.maxLength(50), Validators.pattern(STRING_PATTERN) ])],
      order: [null, Validators.compose([ Validators.minLength(1), Validators.maxLength(3), Validators.pattern(NUMBERS_PATTERN) ])],
    });
    if (this.data != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
      this.form.controls['id'].disable();
    }
  }

  public get id() { return this.form.get('id'); }
  public get descCode() { return this.form.get('descCode'); }
  public get order() { return this.form.get('order'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }

  private createRegister(data): void {
    this.service.register(data).subscribe(
      (res) => {
        this.onLoadFailed('success', 'Código de estado', 'Registrado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.error?.message
            ? err.error.message
            : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

  private updateRegister(data): void {
    delete data.id;
    delete data.idQuestion;
    this.service.update( this.data.id, data).subscribe(
      () => {
        this.onLoadFailed('success', 'Serie', 'Actualizado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

}
