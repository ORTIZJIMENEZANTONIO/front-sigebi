import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

import { STRING_PATTERN } from '../../../../@components/constants';
import { NUMBERS_PATTERN } from '../../../../@components/constants';
import { InstitutionClassificationService } from '../../../../@core/backend/common/services/institution-classification.service';
import { InstitutionClassification } from '../../../../@core/interfaces/auction/institution-classification.model';

@Component({
  selector: 'ngx-institution-classification-detail',
  templateUrl: './institution-classification-detail.component.html',
  styleUrls: ['./institution-classification-detail.component.scss']
})
export class InstitutionClassificationDetailComponent extends BasePage implements OnInit {

  private data: InstitutionClassification;
  public form: FormGroup;
  public actionBtn: string = "Guardar";

  constructor(
    @Inject(NB_WINDOW_CONTEXT) context,
    private service: InstitutionClassificationService,
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
      id: [null],
      description: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern(STRING_PATTERN)])],
      numRegister: [null, Validators.compose([Validators.minLength(1), Validators.pattern(NUMBERS_PATTERN)])],
    });
    if (this.data != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
      this.form.controls['id'].disable();
    }
  }

  public get id() { return this.form.get('id'); }
  public get description() { return this.form.get('description'); }
  public get numRegister() { return this.form.get('numRegister'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }

  private createRegister(data): void {
    this.service.register(data).subscribe(
      (res) => {
        this.onLoadFailed('success', 'Clasificación', 'Registrado Correctamente');
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
    this.service.update(this.data.id, data).subscribe(
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
