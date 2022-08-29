import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbToastrService, NbWindowRef, NbWindowService, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { DoccompensationsatxmlService } from '../../../../@core/backend/common/services/doccompensationsatxml.service';
import { LabelOkeyService } from '../../../../@core/backend/common/services/label-okey.service';
import { ManagementService } from '../../../../@core/backend/common/services/management.service';
import { StageService } from '../../../../@core/backend/common/services/stage.service';
import { Doccompensationsatxml } from '../../../../@core/interfaces/auction/doccompensationsatxml.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';
@Component({
  selector: 'ngx-doccompensation-sat-xml-detail',
  templateUrl: './doccompensation-sat-xml-detail.component.html',
  styleUrls: ['./doccompensation-sat-xml-detail.component.scss']
})
export class DoccompensationSatXmlDetailComponent extends BasePage {

  public form: FormGroup;
  private data: Doccompensationsatxml;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: DoccompensationsatxmlService,
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
  private prepareForm() {
    this.form = this.fb.group({
      id: [null],
      idOficioSat: [null, Validators.compose([Validators.required])],
      typeDocSatXml: [null, Validators.compose([Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data)

    }
  }

  public get idOficioSat() { return this.form.get('idOficioSat'); }
  public get typeDocSatXml() { return this.form.get('typeDocSatXml'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      () => {
        this.onLoadFailed('success', 'Resarcimientos', 'Registrado Correctamente');
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
    let params = {
      idOficioSat:data.idOficioSat,
      typeDocSatXml:data.typeDocSatXml
    }
    this.service.update(this.data.id, params).subscribe(
      () => {
        this.onLoadFailed('success', 'Resarcimientos', 'Actualizado Correctamente');
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
