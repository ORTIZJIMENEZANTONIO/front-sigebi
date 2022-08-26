import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import { BaseApp } from '../../../../@core/shared/base-app';
import { STRING_PATTERN } from '../../../../@components/constants';
import { LegendsService } from '../../../../@core/backend/common/services/legends.service';
import { LegendsModel } from '../../../../@core/interfaces/auction/legends.model';
import { BasePage } from '../../../../@core/shared/base-page';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';

@Component({
  selector: 'ngx-official-legends-detail',
  templateUrl: './official-legends-detail.component.html',
  styleUrls: ['./official-legends-detail.component.scss']
})
export class OfficialLegendsDetailComponent extends BasePage {
  public formLegend: FormGroup;
  private data: LegendsModel;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: LegendsService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super(toastrService);
    console.log(context.legend);
    if (null != context.legend) {
      this.data = context.legend;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formLegend = this.fb.group({
      legend: ['', Validators.compose([Validators.required])],
      version: ['', Validators.compose([Validators.pattern(""), Validators.required])],
      status: [0, Validators.compose([Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formLegend.patchValue(this.data)
    }
  }

  public get legend() { return this.formLegend.get('legend'); }
  public get version() { return this.formLegend.get('version'); }
  public get estatus() { return this.formLegend.get('status'); }

  public register(): void {
    const data = this.formLegend.getRawValue();
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
    this.service.update(this.data.id, data).subscribe(
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
