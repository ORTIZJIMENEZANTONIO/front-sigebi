import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { NormService } from '../../../../@core/backend/common/services/norm.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { NormModel } from '../../../../@core/interfaces/auction/norm.model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-norm-detail',
  templateUrl: './norm-detail.component.html',
  styleUrls: ['./norm-detail.component.scss']
})
export class NormDetailComponent extends BasePage {
  public formNorm: FormGroup;
  private norm: NormModel;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: NormService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    if (null != context.norm) {
      this.norm = context.norm;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formNorm = this.fb.group({
      norm: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      article: [null, Validators.compose([Validators.required])],
      type: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"), Validators.required])],
      characteristics: [null, Validators.compose([Validators.required])],
      merchandise: [null, Validators.compose([Validators.required])],
      fundament: [null, Validators.compose([Validators.required])],
      objective: [null, Validators.compose([Validators.required])],
      destination: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"), Validators.required])],
      condition: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"), Validators.required])],
      version: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      status: [null, Validators.compose([Validators.maxLength(20), Validators.required])],
    });
    if (this.norm) {
      this.actionBtn = "Actualizar";
      this.formNorm.patchValue(this.norm)

    }
  }

  public get normF() { return this.formNorm.get('norm'); }
  public get article() { return this.formNorm.get('noRegistration'); }
  public get dict_ofi() { return this.formNorm.get('dict_ofi'); }
  public get type() { return this.formNorm.get('type'); }
  public get characteristics() { return this.formNorm.get('characteristics'); }
  public get merchandise() { return this.formNorm.get('merchandise'); }
  public get fundament() { return this.formNorm.get('fundament'); }
  public get objective() { return this.formNorm.get('objective'); }
  public get destination() { return this.formNorm.get('destination'); }
  public get condition() { return this.formNorm.get('condition'); }
  public get version() { return this.formNorm.get('version'); }
  public get estatus() { return this.formNorm.get('status'); }

  public register(): void {
    const data = this.formNorm.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      () => {
        this.onLoadFailed('success', 'Despacho', 'Registrado Correctamente');
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
    this.service.update(this.norm.id, data).subscribe(
      () => {
        this.onLoadFailed('success', 'Despacho', 'Actualizado Correctamente');
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
