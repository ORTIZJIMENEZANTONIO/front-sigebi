import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { GenericService } from '../../../../@core/backend/common/services/generic.service';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';
import { GenericModel } from '../../../../@core/interfaces/auction/generic.model';

@Component({
  selector: 'ngx-generic-datail',
  templateUrl: './generic-datail.component.html',
  styleUrls: ['./generic-datail.component.scss']
})
export class GenericDatailComponent extends BasePage implements OnInit {
  public formGeneric: FormGroup;
  private data: GenericModel;
  public actionBtn: string = "Guardar";
  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: GenericService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context) {
    super();
    if (null != context.data) {
      this.data = context.data;
    }
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm() {
    this.formGeneric = this.fb.group({
      name: [null, Validators.compose([Validators.pattern("[a-zA-Z]((\.|_|-)?[a-zA-ZáéíóúÁÉÍÓÚ\u0020]+){0,255}"), Validators.required])],
      keyId: [null, Validators.compose([Validators.pattern("[0-9]{0,255}"), Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      version: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      active: [null, Validators.compose([Validators.required])],
      editable: [null, Validators.compose([Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formGeneric.patchValue(this.data)

    }
  }

  public get name() { return this.formGeneric.get('name'); }
  public get keyId() { return this.formGeneric.get('keyId'); }
  public get description() { return this.formGeneric.get('description'); }
  public get version() { return this.formGeneric.get('version'); }
  public get active() { return this.formGeneric.get('active'); }
  public get editable() { return this.formGeneric.get('editable'); }

  public register(): void {
    const data = this.formGeneric.getRawValue();
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
    this.service.update(this.data.name, data).subscribe(
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