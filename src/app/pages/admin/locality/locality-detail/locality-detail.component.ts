import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { LocalityService } from '../../../../@core/backend/common/services/locality.service';
import { MunicipalityService } from '../../../../@core/backend/common/services/municipality.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { LocalityModel } from '../../../../@core/interfaces/auction/locality.model';


@Component({
  selector: 'ngx-locality-detail',
  templateUrl: './locality-detail.component.html',
  styleUrls: ['./locality-detail.component.scss']
})
export class LocalityDetailComponent extends BasePage {
  public municipalitys = [];
  public formLocality: FormGroup;
  private data: LocalityModel;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: LocalityService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    private serviceMunicipality: MunicipalityService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    if (null != context.locality) {
      this.data = context.locality;
    }
  }

  ngOnInit(): void {
    this.serviceMunicipality.listAll().subscribe(data => {
      this.municipalitys = data['data'];
    }, err => {
      console.log(err);
    })
    this.prepareForm();
  }
  private prepareForm() {
    this.formLocality = this.fb.group({
      key: [null, Validators.compose([Validators.maxLength(30), Validators.required])],
      entityKey: [null, Validators.compose([Validators.maxLength(30), Validators.required])],
      municipalityKey: [null, Validators.compose([Validators.maxLength(60), Validators.required])],
      localityName: [null, Validators.compose([Validators.maxLength(60), Validators.required])],
      ambitKey: [null, Validators.compose([Validators.maxLength(60), Validators.required])],
      version: [null, Validators.compose([Validators.pattern("^([0-9]+)+([.][0-9]+)+([.][0-9]+)?$"), Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formLocality.patchValue(this.data)
      this.key.disable();
    }
  }

  public get key() { return this.formLocality.get('key'); }
  public get entityKey() { return this.formLocality.get('entityKey'); }
  public get municipalityKey() { return this.formLocality.get('municipalityKey'); }
  public get localityName() { return this.formLocality.get('localityName'); }
  public get ambitKey() { return this.formLocality.get('ambitKey'); }
  public get version() { return this.formLocality.get('version'); }

  public register(): void {
    const data = this.formLocality.getRawValue();
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
    this.service.update(this.data.key, data).subscribe(
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
