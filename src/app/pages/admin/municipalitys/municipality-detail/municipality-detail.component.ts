import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { MunicipalityService } from '../../../../@core/backend/common/services/municipality.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { MunicipalityModel } from '../../../../@core/interfaces/auction/municipality.model';
import { BasePage } from '../../../../@core/shared/base-page';


@Component({
  selector: 'ngx-municipality-detail',
  templateUrl: './municipality-detail.component.html',
  styleUrls: ['./municipality-detail.component.scss']
})
export class MunicipalityDetailComponent extends BasePage {
  public formMunicipality: FormGroup;
  private municipality: MunicipalityModel;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: MunicipalityService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    if (null != context.municipality){
      this.municipality = context.municipality;
    }
  }
    
  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formMunicipality = this.fb.group({
      key: [null, Validators.compose([Validators.maxLength(30),Validators.required])],
      entity: [null, Validators.compose([Validators.maxLength(30),Validators.required])],
      municipalityName: [null, Validators.compose([Validators.maxLength(60),Validators.required])],
      version: [null, Validators.compose([Validators.pattern(""),Validators.required])],
    });
    if (this.municipality) {
      this.actionBtn = "Actualizar";
      this.formMunicipality.patchValue(this.municipality)
      this.formMunicipality.controls['key'].disable();
    }
  }

  public get key() { return this.formMunicipality.get('key'); }
  public get entity() { return this.formMunicipality.get('entity'); }
  public get municipalityName() { return this.formMunicipality.get('municipalityName'); }
  public get version() { return this.formMunicipality.get('version'); }

  public register(): void {
    const data = this.formMunicipality.getRawValue();
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
    this.service.update(this.municipality.key, data).subscribe(
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
