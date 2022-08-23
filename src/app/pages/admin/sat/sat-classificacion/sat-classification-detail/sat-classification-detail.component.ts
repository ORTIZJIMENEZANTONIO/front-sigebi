import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { SatClassificationService } from '../../../../../@core/backend/common/services/sat-classification.service';
import { SweetAlertConstants } from '../../../../../@core/interfaces/auction/sweetalert-model';
import { BaseApp } from '../../../../../@core/shared/base-app';
import { BasePage } from '../../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-sat-classification-detail',
  templateUrl: './sat-classification-detail.component.html',
  styleUrls: ['./sat-classification-detail.component.scss']
})
export class SatClassificationDetailComponent extends BasePage implements OnInit {
  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: SatClassificationService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context
  ) {
    super();
    if (null != context.questions)
      this.data = context.questions;
  }

  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm(): void {
    this.form = this.fb.group({
      id: [null],
      nombre_clasificacion:['', Validators.compose([Validators.pattern("")])],
      version: [0, Validators.compose([Validators.pattern("")])] 
    });
    if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get nombre_clasificacion() {return this.form.get('nombre_clasificacion');}
  public get version() {return this.form.get('version');}

  public register(): void {
    const data = this.form.getRawValue();
    this.actionBtn == "Guardar" ? this.createRegister(data) : this.updateRegister(data);
  }
  private createRegister(data): void {
    this.service.register(data).subscribe(
      data => {
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
      data => {
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
