import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService, NbToastrService } from '@nebular/theme';
import { OriginCisiService } from '../../../../@core/backend/common/services/origin-cisi.service';
import { SweetAlertConstants, SweetalertModel } from '../../../../@core/interfaces/auction/sweetalert-model';
import { BasePage } from '../../../../@core/shared/base-page';

@Component({
  selector: 'ngx-origin-cisi-detail',
  templateUrl: './origin-cisi-detail.component.html',
  styleUrls: ['./origin-cisi-detail.component.scss']
})
export class OriginCisiDetailComponent extends BasePage {
  public form: FormGroup;
  private data: any = {};
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: OriginCisiService,
    public windowRef: NbWindowRef,
    public toastrService: NbToastrService,
    @Inject(NB_WINDOW_CONTEXT) context
  ) {
    super(toastrService);
    if (null != context.data) {
      this.data = context.data;
    }
  }
  ngOnInit(): void {
    this.prepareForm();
  }
  private prepareForm(): void {

    this.form = this.fb.group({
      detail:  [null, Validators.compose([Validators.required, Validators.pattern("^[a-zA-Z0-9@.-_-]{1,40}")])],
    });

  
        if (this.data.id != null) {
      this.actionBtn = "Actualizar";
      this.form.patchValue(this.data);
    }
  }

  public get detail() { return this.form.get('detail'); }

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
  