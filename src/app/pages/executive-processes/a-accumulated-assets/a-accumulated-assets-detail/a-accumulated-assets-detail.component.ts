import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

import { NUMBERS_PATTERN, STRING_PATTERN } from '../../../../@components/constants';
import { ServiceCatService } from '../../../../@core/backend/common/services/service-cat.service';
import { ServiceCatInterface } from '../../../../@core/interfaces/auction/service.model';

@Component({
  selector: 'ngx-a-accumulated-assets-detail',
  templateUrl: './a-accumulated-assets-detail.component.html',
  styleUrls: ['./a-accumulated-assets-detail.component.scss']
})
export class AAccumulatedAssetsDetailComponent extends BasePage {

  public form: FormGroup;
  private data: ServiceCatInterface;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: ServiceCatService,
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
      code: [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(30),  Validators.minLength(1) ])],
      description: [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(200),  Validators.minLength(1) ])],
      unaffordabilityCriterion: [null, Validators.compose([Validators.pattern(STRING_PATTERN), Validators.maxLength(1),  Validators.minLength(1) ])],
      subaccount:  [null, Validators.compose([Validators.required, Validators.pattern(STRING_PATTERN), Validators.maxLength(4),  Validators.minLength(1) ])],
      registryNumber:  [null, Validators.compose([Validators.pattern(NUMBERS_PATTERN) ])],
      cost:  [null, Validators.compose([Validators.pattern(STRING_PATTERN), Validators.maxLength(5),  Validators.minLength(1) ])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get code() { return this.form.get('code'); }
  public get description() { return this.form.get('description'); }
  public get unaffordabilityCriterion() { return this.form.get('unaffordabilityCriterion'); }
  public get subaccount() { return this.form.get('subaccount'); }
  public get registryNumber() { return this.form.get('registryNumber'); }
  public get cost() { return this.form.get('cost'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }

  private createRegister(data): void {
    this.service.register(data).subscribe(
      (res) => {
        this.onLoadFailed('success', 'Serie', 'Registrado Correctamente');
      }, err => {
        const error = err.status === 0
          ? SweetAlertConstants.noConexion
          : err.message;
        this.onLoadFailed('danger', 'Error', error);
      }, () => {
        this.windowRef.close();
      });
  }

  private updateRegister(data): void {
    this.service.update(this.data.code, data).subscribe(
      (response) => {
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
