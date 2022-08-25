import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

import { STRING_PATTERN } from '../../../../@components/constants';
import { NUMBERS_PATTERN } from '../../../../@components/constants';
import { IfaiSerieInterface } from '../../../../@core/interfaces/auction/ifai-serie.model';
import { IfaiSerieService } from '../../../../@core/backend/common/services/ifai-serie.service';

@Component({
  selector: 'ngx-ifai-serie-detail',
  templateUrl: './ifai-serie-detail.component.html',
  styleUrls: ['./ifai-serie-detail.component.scss']
})
export class IfaiSerieDetailComponent extends BasePage {

  public form: FormGroup;
  private data: IfaiSerieInterface;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: IfaiSerieService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context) {
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
      code: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern(STRING_PATTERN) ])],
      typeProcedure: ['', Validators.compose([ Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.pattern(STRING_PATTERN) ])],
      description: [ '', Validators.compose([ Validators.minLength(1), Validators.maxLength(80), Validators.pattern(STRING_PATTERN)]) ],
      registryNumber: [null, Validators.compose([ Validators.pattern(NUMBERS_PATTERN) ])],
      status: [null, Validators.compose([Validators.required, Validators.maxLength(1), Validators.minLength(1), Validators.pattern(STRING_PATTERN) ])]
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get code() { return this.form.get('code'); }
  public get typeProcedure() { return this.form.get('typeProcedure'); }
  public get description() { return this.form.get('description'); }
  public get registryNumber() { return this.form.get('registryNumber'); }
  public get estatus() { return this.form.get('status'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }

  private createRegister(data): void {
    this.service.register(data).subscribe(
      (res) => {
        this.onLoadFailed('success', 'Serie', 'Registrado Correctamente');
      }, err => {
        console.log(err)
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
    this.service.update(this.data.code, data).subscribe(
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
