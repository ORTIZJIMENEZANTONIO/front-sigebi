import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { BaseApp } from '../../../../@core/shared/base-app';
import { StorehouseService } from '../../../../@core/backend/common/services/storehouse.service';
import { SweetalertService } from '../../../../shared/sweetalert.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-storehouse-detail',
  templateUrl: './storehouse-detail.component.html',
  styleUrls: ['./storehouse-detail.component.scss']
})
export class StorehouseDetailComponent extends BasePage {

  Form: FormGroup;
  data: any = {};

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: StorehouseService,
    public windowRef: NbWindowRef,
    @Inject(NB_WINDOW_CONTEXT) context,
    private dom: DomSanitizer,
    private windowService: NbWindowService,
    public toA: NbToastrService,
    public sweetalertService: SweetalertService) {
    super();
    if (null != context.data) {
      this.data = context.data;
    }
  }
  actionBtn: string = "Guardar";
    form = this.fb.group({

      idStorehouse:[''],
      manager: ['',Validators.required],
      descripcion: ['', Validators.required],
      municipality: ['',[Validators.required]],
      locality: ['',[Validators.required]],
      ubication: ['',[Validators.required]],
      idEntity: ['',Validators.required],

    });
  
    get validateStorehouse() {
      return this.form.controls;
    }
    ngOnInit(): void {
      if (this.data.id != null) {
        this.actionBtn = "Actualizar";
        this.form.patchValue(this.data);
      }
  
    }
  
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
  