import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';

import { DeductiveService } from '../../../../@core/backend/common/services/deductive.service';
import { DeductiveInterface } from '../../../../@core/interfaces/auction/deductive.model';
import { SweetAlertConstants } from '../../../../@core/interfaces/auction/sweetalert-model';

@Component({
  selector: 'ngx-deductive-detail',
  templateUrl: './deductive-detail.component.html',
  styleUrls: ['./deductive-detail.component.scss']
})
export class DeductiveDetailComponent extends BasePage implements OnInit {
  public formDeductive: FormGroup;
  private data: DeductiveInterface;
  public actionBtn: string = "Guardar";

  constructor(
    private fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    private service: DeductiveService,
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
    this.formDeductive = this.fb.group({
      serviceType: [null, Validators.required],
      weightedDeduction: [null, Validators.required],
      startingRankPercentage: [null, Validators.required],
      finalRankPercentage: [null, Validators.required],
      contractNumber: [null, Validators.required],
      version: [null, Validators.compose([Validators.pattern(""), Validators.required])],
      status: [null, Validators.compose([Validators.required])],
    });
    if (this.data) {
      this.actionBtn = "Actualizar";
      this.formDeductive.patchValue(this.data)

    }
  }

  public get serviceType() { return this.formDeductive.get('serviceType'); }
  public get weightedDeduction() { return this.formDeductive.get('weightedDeduction'); }
  public get startingRankPercentage() { return this.formDeductive.get('startingRankPercentage'); }
  public get finalRankPercentage() { return this.formDeductive.get('finalRankPercentage'); }
  public get contractNumber() { return this.formDeductive.get('contractNumber'); }
  public get version() { return this.formDeductive.get('version'); }
  public get estatus() { return this.formDeductive.get('status'); }

  public register(): void {
    const data = this.formDeductive.getRawValue();
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
