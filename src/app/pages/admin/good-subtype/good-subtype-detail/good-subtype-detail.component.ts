import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { GoodSubtypeService } from '../../../../@core/backend/common/services/good-subtype.service';
import { GoodsSubtypeService } from '../../../../@core/backend/common/services/goods-subtype.service';
import { GoodSubtype } from '../../../../@core/interfaces/auction/good-subtype.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-good-subtype-detail',
  templateUrl: './good-subtype-detail.component.html',
  styleUrls: ['./good-subtype-detail.component.scss']
})
export class GoodSubtypeDetailComponent extends BasePage {
  public form: FormGroup;
  private goodSubtype: GoodSubtype;
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
    if (null != context.goodSubtype) {
      this.goodSubtype = context.goodSubtype;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.form = this.fb.group({
      id: [null],
      description: [null, Validators.required],
      numType: [null, Validators.required],
      numRegister: [null, Validators.required]
    });
    if (this.goodSubtype) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.goodSubtype)

    }
  }

  public get description() { return this.form.get('description'); }
  public get numType() { return this.form.get('numType'); }
  public get numRegister() { return this.form.get('numRegister'); }

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      () => {
        this.onLoadFailed('success', 'Subtipo bien', 'Registrado Correctamente');
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
    this.service.update(this.goodSubtype.id, data).subscribe(
      () => {
        this.onLoadFailed('success', 'Subtipo bien', 'Actualizado Correctamente');
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
