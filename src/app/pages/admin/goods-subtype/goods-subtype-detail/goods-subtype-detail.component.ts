import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { GoodsSubtypeService } from '../../../../@core/backend/common/services/goods-subtype.service';
import { GoodsSubtype } from '../../../../@core/interfaces/auction/goods-subtype.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BaseApp } from '../../../../@core/shared/base-app';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-goods-subtype-detail',
  templateUrl: './goods-subtype-detail.component.html',
  styleUrls: ['./goods-subtype-detail.component.scss']
})
export class GoodsSubtypeDetailComponent extends BasePage implements OnInit {
  public form: FormGroup;
  private data: GoodsSubtype;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: GoodsSubtypeService,
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
      nameGoodSubtype: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(50)])],
      numberPhotographs: [null, Validators.compose([Validators.pattern("")])],
      descFotographs: [null, Validators.compose([Validators.pattern(""), Validators.required, Validators.maxLength(500)])],
      version: [null, Validators.compose([Validators.pattern(""), Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data)

    }
  }

  public get nameGoodSubtype() { return this.form.get('nameGoodSubtype'); }
  public get numberPhotographs() { return this.form.get('numberPhotographs'); }
  public get descFotographs() { return this.form.get('descFotographs'); }
  public get version() { return this.form.get('version'); }

  public register(): void {
    const data = this.form.getRawValue();
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
